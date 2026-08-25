"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"

interface ResearchCardProps {
  title: string
  overview: string
  imageUrl?: string
}

export function ResearchCard({ title, overview, imageUrl }: ResearchCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div 
      layout
      className="group flex flex-col rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative"
    >
      <div className="h-48 bg-white flex items-center justify-center relative overflow-hidden shrink-0 border-b border-slate-100 p-4">
        {imageUrl ? (
          <img src={imageUrl} alt={title} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
        ) : (
          <span className="text-slate-400 font-medium bg-slate-100 w-full h-full flex items-center justify-center">[IMAGE_PLACEHOLDER]</span>
        )}
      </div>
      <div className="p-6 flex-1 flex flex-col relative z-10 bg-white">
        <h3 className="font-heading text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors pr-8">
          {title}
        </h3>
        <div className="mb-4">
          <p className="text-slate-600 text-sm leading-relaxed">{overview}</p>
        </div>
        
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="pt-4 border-t border-slate-100 mt-2">
                <p className="text-sm font-semibold text-primary">To be Updated</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="absolute top-6 right-6 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-primary hover:text-white transition-colors cursor-pointer"
          aria-label="Expand research details"
        >
          {isExpanded ? <Minus size={16} /> : <Plus size={16} />}
        </button>
      </div>
    </motion.div>
  )
}
