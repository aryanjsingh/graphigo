"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { Play } from "lucide-react"

const categories = ["All", "Long Form", "Short Form"]

type WorkType = "youtube" | "direct"

interface Work {
  id: number
  title: string
  client: string
  category: string
  duration: string
  image: string
  type: WorkType
  videoSrc?: string
  youtubeId?: string
}

const works: Work[] = [
  {
    id: 1,
    title: "Brand Documentary",
    client: "Prada",
    category: "Long Form",
    duration: "4:30",
    image: "/luxury-fashion-photography-dark-aesthetic.jpg",
    type: "youtube",
    youtubeId: "dQw4w9WgXcQ", // Placeholder
  },
  {
    id: 2,
    title: "Product Launch Film",
    client: "Tesla",
    category: "Long Form",
    duration: "2:15",
    image: "/futuristic-car-commercial-dark-cinematic.jpg",
    type: "youtube",
    youtubeId: "dQw4w9WgXcQ", // Placeholder
  },
  {
    id: 3,
    title: "Brand Story",
    client: "Rolex",
    category: "Long Form",
    duration: "3:45",
    image: "/luxury-watch-brand-film-elegant-dark.jpg",
    type: "youtube",
    youtubeId: "dQw4w9WgXcQ", // Placeholder
  },
  {
    id: 4,
    title: "Social Media Reel",
    client: "Adidas",
    category: "Short Form",
    duration: "0:30",
    image: "/sports-commercial-athletic-dark-dramatic.jpg",
    type: "direct",
    videoSrc: "https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4", // Placeholder
  },
  {
    id: 5,
    title: "Instagram Content",
    client: "Vogue",
    category: "Short Form",
    duration: "0:45",
    image: "/high-fashion-editorial-dramatic-lighting.jpg",
    type: "direct",
    videoSrc: "https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4", // Placeholder
  },
  {
    id: 6,
    title: "Music Video",
    client: "Universal",
    category: "Long Form",
    duration: "3:20",
    image: "/music-video-production-cinematic-dark-artistic.jpg",
    type: "youtube",
    youtubeId: "dQw4w9WgXcQ", // Placeholder
  },
  {
    id: 7,
    title: "Documentary Series",
    client: "Netflix",
    category: "Long Form",
    duration: "5:00",
    image: "/documentary-filmmaking-cinematic-storytelling.jpg",
    type: "youtube",
    youtubeId: "dQw4w9WgXcQ", // Placeholder
  },
  {
    id: 8,
    title: "TikTok Campaign",
    client: "Dyson",
    category: "Short Form",
    duration: "0:35",
    image: "/product-photography-dark-minimalist-tech.jpg",
    type: "direct",
    videoSrc: "https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4", // Placeholder
  },
]

export function WorkShowcase() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeCategory, setActiveCategory] = useState("All")
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [playingId, setPlayingId] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.05 },
    )

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const filteredWorks = activeCategory === "All" ? works : works.filter((w) => w.category === activeCategory)

  const handlePlay = (id: number, e: React.MouseEvent) => {
    e.stopPropagation()
    setPlayingId(id)
  }

  return (
    <section ref={sectionRef} className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-on-scroll">
          <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-4">Portfolio</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">More Work</h2>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-on-scroll stagger-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat)
                setPlayingId(null)
              }}
              className={cn(
                "px-6 py-3 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === cat
                  ? "bg-accent text-accent-foreground"
                  : "bg-card text-muted-foreground hover:text-foreground hover:bg-card/80",
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 grid-flow-row-dense">
          {filteredWorks.map((work, i) => (
            <div
              key={work.id}
              className={cn(
                "animate-on-scroll",
                work.category === "Long Form" ? "sm:col-span-2 lg:col-span-2" : "col-span-1",
              )}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div
                className={cn(
                  "group relative overflow-hidden rounded-xl bg-card cursor-pointer",
                  work.category === "Long Form" ? "aspect-video" : "aspect-[9/16]",
                )}
                onMouseEnter={() => setHoveredId(work.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => playingId !== work.id && setPlayingId(work.id)}
              >
                {playingId === work.id ? (
                  <div className="absolute inset-0 z-20 bg-black">
                    {work.type === "youtube" ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${work.youtubeId}?autoplay=1&rel=0`}
                        className="w-full h-full"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                      />
                    ) : (
                      <video
                        src={work.videoSrc}
                        className="w-full h-full object-cover"
                        controls
                        autoPlay
                      />
                    )}
                  </div>
                ) : (
                  <>
                    <img
                      src={work.image || "/placeholder.svg"}
                      alt={work.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div
                      className={cn(
                        "absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent transition-opacity duration-500",
                        hoveredId === work.id ? "opacity-100" : "opacity-0",
                      )}
                    />

                    <div
                      className={cn(
                        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-accent/90 flex items-center justify-center transition-all duration-500",
                        hoveredId === work.id ? "scale-100 opacity-100" : "scale-75 opacity-0",
                      )}
                      onClick={(e) => handlePlay(work.id, e)}
                    >
                      <Play size={24} className="text-accent-foreground ml-1" fill="currentColor" />
                    </div>

                    <div
                      className={cn(
                        "absolute bottom-0 left-0 right-0 p-6 transition-all duration-500",
                        hoveredId === work.id ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                      )}
                    >
                      <p className="text-accent text-sm font-medium mb-1">{work.client}</p>
                      <h3 className="text-xl font-bold">{work.title}</h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        {work.category} • {work.duration}
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-on-scroll">
          <button className="px-8 py-4 border border-border hover:border-accent text-foreground font-semibold rounded-full transition-all duration-300 hover:bg-accent/10">
            Load More Projects
          </button>
        </div>
      </div>
    </section>
  )
}
