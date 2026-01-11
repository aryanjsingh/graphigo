"use client"

import { useEffect, useRef, useState } from "react"

interface LazyVideoProps {
    src: string
    className?: string
    poster?: string
}

export const LazyVideo = ({ src, className, poster }: LazyVideoProps) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isVisible, setIsVisible] = useState(false)
    const [shouldLoad, setShouldLoad] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setShouldLoad(true) // Start loading video
                        setIsVisible(true)
                    } else {
                        setIsVisible(false)
                        // Pause when out of view to save resources
                        videoRef.current?.pause()
                    }
                })
            },
            {
                threshold: 0.1,
                rootMargin: "200px", // Preload 200px before it comes into view
            }
        )

        if (containerRef.current) {
            observer.observe(containerRef.current)
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current)
            }
        }
    }, [])

    useEffect(() => {
        if (isVisible && videoRef.current) {
            videoRef.current.play().catch(() => {
                // Autoplay was prevented, ignore
            })
        }
    }, [isVisible])

    return (
        <div ref={containerRef} className={className}>
            {shouldLoad ? (
                <video
                    ref={videoRef}
                    src={src}
                    className="w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster={poster}
                />
            ) : (
                <div
                    className="w-full h-full bg-neutral-900/50 flex items-center justify-center"
                    style={{
                        backgroundImage: poster ? `url(${poster})` : undefined,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    {!poster && (
                        <div className="w-12 h-12 border-2 border-neutral-700 border-t-neutral-400 rounded-full animate-spin" />
                    )}
                </div>
            )}
        </div>
    )
}
