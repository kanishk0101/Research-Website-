"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface AccordionItem {
  id: string
  title: string
  content: string
}

interface AccordionProps {
  items: AccordionItem[]
  className?: string
}

export function Accordion({ items, className }: AccordionProps) {
  const [openId, setOpenId] = React.useState<string | null>(null)

  return (
    <div className={cn("w-full space-y-4", className)}>
      {items.map((item) => (
        <div key={item.id} className="border border-slate-200 rounded-3xl overflow-hidden bg-white">
          <button
            onClick={() => setOpenId(openId === item.id ? null : item.id)}
            className="flex items-center justify-between w-full p-4 text-left font-medium text-slate-900 focus:outline-none"
          >
            <span>{item.title}</span>
            <ChevronDown
              className={cn("h-5 w-5 text-slate-500 transition-transform duration-200", {
                "rotate-180": openId === item.id,
              })}
            />
          </button>
          <AnimatePresence>
            {openId === item.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-4 pt-0 text-slate-600">
                  {item.content}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
