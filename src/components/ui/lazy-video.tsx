"use client"

import { useEffect, useRef, useState } from "react"

interface LazyVideoProps {
    src: string
    className?: string
}

export const LazyVideo = ({ src, className }: LazyVideoProps) => {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true)
                        videoRef.current?.play()
                    } else {
                        // Optional: Pause when out of view to save resources
                        videoRef.current?.pause()
                    }
                })
            },
            {
                threshold: 0.1,
                rootMargin: "50px", // Preload a bit before it comes into view
            }
        )

        if (videoRef.current) {
            observer.observe(videoRef.current)
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current)
            }
        }
    }, [])

    return (
        <video
            ref={videoRef}
            src={isVisible ? src : undefined} // Only set src when visible
            className={className}
            muted
            loop
            playsInline
            preload="none"
            poster="/placeholder.svg" // Optional: add a poster if you have one
        />
    )
}
