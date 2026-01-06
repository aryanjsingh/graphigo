"use client"

import { useEffect, useRef } from "react"
import { Play, ArrowDown } from "lucide-react"

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current || !textRef.current) return
      const scrollY = window.scrollY
      const opacity = Math.max(0, 1 - scrollY / 600)
      const translateY = scrollY * 0.4
      textRef.current.style.opacity = String(opacity)
      textRef.current.style.transform = `translateY(${translateY}px)`
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background video placeholder */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/30 rounded-full blur-[150px] animate-pulse-glow" />
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-[120px] animate-pulse-glow"
            style={{ animationDelay: "1.5s" }}
          />
        </div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div ref={textRef} className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="overflow-hidden mb-6">
          <p
            className="text-accent font-medium tracking-[0.3em] uppercase text-sm md:text-base animate-in fade-in slide-in-from-bottom-4 duration-700"
            style={{ animationDelay: "0.2s", animationFillMode: "both" }}
          >
            Graphigo Studios
          </p>
        </div>

        <div className="overflow-hidden mb-8">
          <h1
            className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter leading-none animate-in fade-in slide-in-from-bottom-8 duration-1000"
            style={{ animationDelay: "0.4s", animationFillMode: "both" }}
          >
            <span className="block">OUR</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-foreground via-accent to-foreground">
              WORK
            </span>
          </h1>
        </div>

        <div className="overflow-hidden mb-12">
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-700"
            style={{ animationDelay: "0.6s", animationFillMode: "both" }}
          >
            Crafting visual stories that captivate, inspire, and transform brands into cultural movements.
          </p>
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700"
          style={{ animationDelay: "0.8s", animationFillMode: "both" }}
        >
          <button className="group relative px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95">
            <span className="relative z-10 flex items-center gap-2">
              <Play size={20} fill="currentColor" />
              Watch Showreel
            </span>
            <div className="absolute inset-0 bg-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="absolute inset-0 flex items-center justify-center text-background opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">
              <Play size={20} fill="currentColor" className="mr-2" />
              Watch Showreel
            </span>
          </button>

          <button className="group px-8 py-4 border border-border hover:border-accent text-foreground font-semibold rounded-full transition-all duration-300 hover:bg-accent/10">
            View Projects
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-in fade-in duration-1000"
        style={{ animationDelay: "1.2s", animationFillMode: "both" }}
      >
        <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
        <ArrowDown size={20} className="text-accent animate-bounce" />
      </div>
    </section>
  )
}
