"use client"

import { useEffect, useRef, useState } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"
import { cn } from "@/lib/utils"

export function VideoReel() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll, .animate-scale-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 animate-on-scroll">
          <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-4">Showreel 2024</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Experience Our Craft</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Two minutes of our finest work. From concept to final cut.
          </p>
        </div>

        <div className="animate-scale-on-scroll">
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-card group cursor-pointer">
            {/* Video placeholder */}
            <img
              src="/cinematic-video-production-reel-dark-moody-film-fo.jpg"
              alt="Video Reel"
              className={cn(
                "w-full h-full object-cover transition-transform duration-700",
                isPlaying ? "scale-105" : "scale-100 group-hover:scale-105",
              )}
            />

            {/* Overlay */}
            <div
              className={cn(
                "absolute inset-0 bg-background/60 transition-opacity duration-500",
                isPlaying ? "opacity-0" : "opacity-100 group-hover:opacity-70",
              )}
            />

            {/* Play button */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={cn(
                "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 rounded-full bg-accent flex items-center justify-center transition-all duration-500",
                isPlaying ? "scale-0 opacity-0" : "scale-100 opacity-100 group-hover:scale-110",
              )}
            >
              <Play size={40} className="text-accent-foreground ml-2" fill="currentColor" />
            </button>

            {/* Controls */}
            <div
              className={cn(
                "absolute bottom-0 left-0 right-0 p-6 flex items-center justify-between transition-all duration-500",
                isPlaying ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
              )}
            >
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-12 h-12 rounded-full bg-foreground/20 backdrop-blur-sm flex items-center justify-center hover:bg-foreground/30 transition-colors"
              >
                {isPlaying ? (
                  <Pause size={20} className="text-foreground" />
                ) : (
                  <Play size={20} className="text-foreground ml-1" fill="currentColor" />
                )}
              </button>

              <button
                onClick={() => setIsMuted(!isMuted)}
                className="w-12 h-12 rounded-full bg-foreground/20 backdrop-blur-sm flex items-center justify-center hover:bg-foreground/30 transition-colors"
              >
                {isMuted ? (
                  <VolumeX size={20} className="text-foreground" />
                ) : (
                  <Volume2 size={20} className="text-foreground" />
                )}
              </button>
            </div>

            {/* Progress bar placeholder */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-foreground/10">
              <div className={cn("h-full bg-accent transition-all duration-1000", isPlaying ? "w-1/3" : "w-0")} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
