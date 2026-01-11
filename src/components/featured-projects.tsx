"use client"

import { useEffect, useRef, useState } from "react"
import { Play } from "lucide-react"
import { cn } from "@/lib/utils"

type ProjectType = "youtube" | "direct"

interface Project {
  id: number
  title: string
  category: string
  year: string
  image: string
  duration: string
  type: ProjectType
  videoSrc?: string
  youtubeId?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Nike Air Max Campaign",
    category: "Long Form",
    year: "2024",
    image: "/cinematic-nike-sneakers-commercial-dark-background.jpg",
    duration: "2:45",
    type: "youtube",
    youtubeId: "dQw4w9WgXcQ", // Placeholder
  },
  {
    id: 2,
    title: "Apple Product Launch Film",
    category: "Long Form",
    year: "2023",
    image: "/minimalist-tech-product-video-dark-aesthetic.jpg",
    duration: "3:20",
    type: "youtube",
    youtubeId: "dQw4w9WgXcQ", // Placeholder
  },
  {
    id: 3,
    title: "Instagram Reels Series",
    category: "Short Form",
    year: "2024",
    image: "/high-fashion-editorial-photography-dramatic-lighti.jpg",
    duration: "0:30",
    type: "direct",
    videoSrc: "https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4", // Placeholder
  },
  {
    id: 4,
    title: "TikTok Brand Content",
    category: "Short Form",
    year: "2024",
    image: "/celebrity-portrait-photography-magazine-cover-styl.jpg",
    duration: "0:45",
    type: "direct",
    videoSrc: "https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4", // Placeholder
  },
]

export function FeaturedProjects() {
  const sectionRef = useRef<HTMLElement>(null)
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
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" },
    )

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const handlePlay = (id: number, e: React.MouseEvent) => {
    e.stopPropagation()
    setPlayingId(id)
  }

  return (
    <section ref={sectionRef} id="work" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="animate-on-scroll">
            <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-4">Featured Work</p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              Selected
              <br />
              Projects
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md animate-on-scroll stagger-1">
            A curated selection of our most impactful collaborations with world-leading brands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 grid-flow-row-dense">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={cn(
                "animate-on-scroll group relative overflow-hidden rounded-2xl bg-card cursor-pointer",
                project.category === "Long Form" ? "md:col-span-8 aspect-video" : "md:col-span-4 aspect-[9/16]",
              )}
              style={{ transitionDelay: `${i * 0.1}s` }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => playingId !== project.id && setPlayingId(project.id)}
            >
              {playingId === project.id ? (
                <div className="absolute inset-0 z-20 bg-black">
                  {project.type === "youtube" ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&rel=0`}
                      className="w-full h-full"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    />
                  ) : (
                    <video
                      src={project.videoSrc}
                      className="w-full h-full object-cover"
                      controls
                      autoPlay
                    />
                  )}
                </div>
              ) : (
                <>
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-10" />

                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />

                  <div
                    className={cn(
                      "absolute inset-0 bg-accent/20 z-10 transition-opacity duration-500",
                      hoveredId === project.id ? "opacity-100" : "opacity-0",
                    )}
                  />

                  <div
                    className={cn(
                      "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-20 h-20 rounded-full bg-accent/90 flex items-center justify-center transition-all duration-500",
                      hoveredId === project.id ? "scale-100 opacity-100" : "scale-75 opacity-0",
                    )}
                    onClick={(e) => handlePlay(project.id, e)}
                  >
                    <Play size={32} className="text-accent-foreground ml-1" fill="currentColor" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-medium tracking-wider uppercase text-accent">{project.category}</span>
                      <span className="text-xs text-muted-foreground">{project.duration}</span>
                      <span className="text-xs text-muted-foreground">{project.year}</span>
                    </div>
                    <div className="flex items-end justify-between gap-4">
                      <h3
                        className={cn(
                          "text-2xl md:text-3xl font-bold transition-transform duration-500",
                          hoveredId === project.id ? "translate-x-2" : "translate-x-0",
                        )}
                      >
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
