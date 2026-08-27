"use client"

import * as React from "react"
import PUBLICATIONS_DATA from "@/data/publications.json"

export default function PublicationsPage() {
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

      <div className="container mx-auto px-4 py-16 max-w-5xl">
        
        {/* Book Chapters Section */}
        <section className="mb-16">
          <h2 className="font-heading text-3xl font-bold text-slate-900 mb-6 pb-2 border-b-2 border-slate-200">
            Book Chapters
          </h2>
          <ul className="list-disc list-outside pl-5 space-y-4 text-slate-700 leading-relaxed">
            {/* Future book chapters can be added here */}
            <li className="text-slate-500 italic">No book chapters available at this time.</li>
          </ul>
        </section>

        {/* Patents Section */}
        <section className="mb-16">
          <h2 className="font-heading text-3xl font-bold text-slate-900 mb-6 pb-2 border-b-2 border-slate-200">
            Patents
          </h2>
          <ul className="list-disc list-outside pl-5 space-y-4 text-slate-700 leading-relaxed">
            <li>
              Tanveer H. Tadavi, M. Yadav, B E Vardhmann, K. Subbu, N. Agarwal and K.I. Priyadarsini, &quot;A Portable Device for Estimation of Curcuminoid Content in Turmeric,&quot; <em>India Patent App. No. 202221063957 Granted</em> <strong>(2026)</strong>.
            </li>
          </ul>
        </section>

        {/* Publications Section */}
        <section className="mb-16">
          <h2 className="font-heading text-3xl font-bold text-slate-900 mb-6 pb-2 border-b-2 border-slate-200">
            Publications
          </h2>
          <ul className="list-disc list-outside pl-5 space-y-6 text-slate-700 leading-relaxed">
            {PUBLICATIONS_DATA.map((pub) => {
              const hasDoi = Boolean(pub.doi && pub.doi.trim() !== "");
              return (
                <li key={pub.id}>
                  {pub.authors}, &quot;{pub.title},&quot; <em>{pub.journal}</em> {pub.volume && pub.volume !== "-" && <span>{pub.volume}</span>}{pub.volume && pub.pages && pub.volume !== "-" && <span>, </span>}{pub.pages && pub.pages !== "-" && <span>{pub.pages}</span>} <strong>({pub.year})</strong>.
                  {hasDoi && (
                    <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-2">
                      DOI
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </section>

      </div>
    </div>
  )
}
