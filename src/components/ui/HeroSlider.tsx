"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const images = [
  "/images/organic-spintronics.jpg",
  "/images/oleds-photophysics.png",
  "/images/targeted-photomedicine.png",
]

export function HeroSlider() {
  const [currentIndex, setCurrentIndex] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const prev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length)

  return (
    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 group">
      {images.map((src, index) => (
        <img
          key={src}
          src={src}
          alt={`Slide ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
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
        {images.map((_, index) => (
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
