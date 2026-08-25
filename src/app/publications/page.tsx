"use client"

import * as React from "react"
import { PublicationCard } from "@/components/cards/PublicationCard"
import { Input } from "@/components/ui/Input"
import { Search } from "lucide-react"

import PUBLICATIONS_DATA from "@/data/publications.json"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/Button"

export default function PublicationsPage() {
  const [searchTerm, setSearchTerm] = React.useState("")
  const [selectedYear, setSelectedYear] = React.useState("All")
  const [selectedJournal, setSelectedJournal] = React.useState("All")
  const [sortBy, setSortBy] = React.useState("newest")
  const [currentPage, setCurrentPage] = React.useState(1)
  const ITEMS_PER_PAGE = 10

  const years = ["All", ...Array.from(new Set(PUBLICATIONS_DATA.map(p => p.year))).sort().reverse()]
  const journals = ["All", ...Array.from(new Set(PUBLICATIONS_DATA.map(p => p.journal))).sort()]

  const filteredPublications = React.useMemo(() => {
    return PUBLICATIONS_DATA.filter((pub) => {
      const term = searchTerm.toLowerCase()
      const matchesSearch = 
        pub.title.toLowerCase().includes(term) || 
        pub.authors.toLowerCase().includes(term) ||
        pub.journal.toLowerCase().includes(term) ||
        pub.year.includes(term)
      
      const matchesYear = selectedYear === "All" || pub.year === selectedYear
      const matchesJournal = selectedJournal === "All" || pub.journal === selectedJournal
      return matchesSearch && matchesYear && matchesJournal
    }).sort((a, b) => {
      if (sortBy === "newest") return b.year.localeCompare(a.year)
      if (sortBy === "oldest") return a.year.localeCompare(b.year)
      return 0
    })
  }, [searchTerm, selectedYear, selectedJournal, sortBy])

  const totalPages = Math.ceil(filteredPublications.length / ITEMS_PER_PAGE)
  const currentPublications = filteredPublications.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1516110833967-0b5716ca1387?auto=format&fit=crop&q=80)' }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white shadow-sm mb-6">
              Publications
            </h1>
            <p className="text-xl text-slate-300 font-light leading-relaxed">
              Transforming collective curiosity into peer-reviewed progress.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-white border-b border-slate-200 py-12">
        <div className="container mx-auto px-4">
          
          {/* Filters Bar */}
          <div className="flex flex-col md:flex-row gap-4 bg-slate-50 p-4 rounded-3xl border border-slate-100">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <Input 
                type="text"
                placeholder="Search by title, author, journal, or year..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <select 
                className="h-10 rounded-3xl border border-slate-200 bg-white px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                value={selectedYear}
                onChange={(e) => { setSelectedYear(e.target.value); setCurrentPage(1); }}
              >
                {years.map(y => <option key={y} value={y}>{y === "All" ? "All Years" : y}</option>)}
              </select>
              <select 
                className="h-10 rounded-3xl border border-slate-200 bg-white px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary max-w-[200px] truncate"
                value={selectedJournal}
                onChange={(e) => { setSelectedJournal(e.target.value); setCurrentPage(1); }}
                title={selectedJournal}
              >
                {journals.map(j => <option key={j} value={j}>{j === "All" ? "All Journals" : j}</option>)}
              </select>
              <select 
                className="h-10 rounded-3xl border border-slate-200 bg-white px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                value={sortBy}
                onChange={(e) => { setSortBy(e.target.value); setCurrentPage(1); }}
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-slate-700 font-semibold text-sm uppercase tracking-wider">
            Showing {filteredPublications.length} publications
          </h2>
        </div>
        <div className="flex flex-col gap-6">
          {currentPublications.map((pub) => (
            <PublicationCard
              key={pub.id}
              title={pub.title}
              authors={pub.authors}
              journal={pub.journal}
              year={pub.year}
              volume={pub.volume}
              pages={pub.pages}
              doi={pub.doi}
            />
          ))}
          
          {filteredPublications.length === 0 && (
            <div className="text-center py-24 bg-white rounded-3xl border border-slate-200">
              <p className="text-slate-500 text-lg">No publications found matching your criteria.</p>
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="rounded-full w-10 h-10 p-0"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            
            <div className="flex items-center space-x-1 mx-4 text-sm font-medium text-slate-700">
              Page {currentPage} of {totalPages}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="rounded-full w-10 h-10 p-0"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
