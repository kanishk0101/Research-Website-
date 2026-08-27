"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/research", label: "Research" },
  { href: "/publications", label: "Publications" },
  { href: "/members", label: "Group Members" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/50 bg-white/90 backdrop-blur-md">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between gap-4 lg:gap-8">
        <Link href="/" className="flex items-center space-x-2 shrink-0 max-w-[60%] lg:max-w-[70%]">
          <span className="font-heading text-lg md:text-xl font-bold text-slate-900 truncate" title="The Excitation Dynamics & Organic Materials Group">The Excitation Dynamics & Organic Materials Group</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary cursor-pointer",
                pathname === link.href ? "text-primary" : "text-slate-600"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <button 
            className="text-slate-900 p-2 focus:outline-none cursor-pointer" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white">
          <nav className="flex flex-col py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "px-6 py-3 text-base font-medium transition-colors hover:bg-slate-50 cursor-pointer",
                  pathname === link.href ? "text-primary bg-slate-50" : "text-slate-600"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
