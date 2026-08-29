"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [1, 2, 3]

export function HeroSlider() {
  const [currentIndex, setCurrentIndex] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const prev = () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
  const next = () => setCurrentIndex((prev) => (prev + 1) % slides.length)

  return (
    <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 group">
      {slides.map((_, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full bg-slate-800/60 backdrop-blur-sm flex items-center justify-center transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <span className="text-slate-400/80 font-medium tracking-widest text-sm uppercase">Slide {index + 1}</span>
        </div>
      ))}
      
      {/* Controls */}
      <div className="absolute inset-0 z-20 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={prev}
          className="w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80 backdrop-blur-sm transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          className="w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80 backdrop-blur-sm transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? "bg-white w-4" : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
