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
    const [isInViewport, setIsInViewport] = useState(false)
    const [shouldRender, setShouldRender] = useState(false)
    const [hasError, setHasError] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Video entering viewport - load it
                        setIsInViewport(true)
                        setShouldRender(true)
                    } else {
                        // Video leaving viewport - unload to free memory
                        setIsInViewport(false)

                        // Pause and clear video to free memory
                        if (videoRef.current) {
                            videoRef.current.pause()
                            videoRef.current.currentTime = 0
                            // Clear src to stop streaming and free memory
                            videoRef.current.removeAttribute('src')
                            videoRef.current.load() // Reset video element
                        }
                    }
                })
            },
            {
                threshold: 0.25, // Trigger when 25% visible (as per optimization prompt)
                rootMargin: "100px", // Preload slightly before entering viewport
            }
        )

        if (containerRef.current) {
            observer.observe(containerRef.current)
        }

        return () => {
            // Cleanup observer on unmount
            if (containerRef.current) {
                observer.unobserve(containerRef.current)
            }

            // Clean up video resources on unmount
            if (videoRef.current) {
                videoRef.current.pause()
                videoRef.current.removeAttribute('src')
                videoRef.current.load()
            }
        }
    }, [])

    // Handle video playback when in viewport
    useEffect(() => {
        if (isInViewport && videoRef.current && videoRef.current.src) {
            videoRef.current.play().catch((err) => {
                console.warn("Autoplay prevented:", err)
            })
        }
    }, [isInViewport])

    const handleError = () => {
        setHasError(true)
        console.error("Failed to load video from CDN:", src)
    }

    return (
        <div ref={containerRef} className={className}>
            {shouldRender ? (
                hasError ? (
                    // Error fallback
                    <div
                        className="w-full h-full bg-neutral-900/80 flex items-center justify-center"
                        style={{
                            backgroundImage: poster ? `url(${poster})` : undefined,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    >
                        <div className="text-neutral-500 text-sm">Video unavailable</div>
                    </div>
                ) : (
                    <video
                        ref={videoRef}
                        src={isInViewport ? src : undefined}
                        className="w-full h-full object-cover block"
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        poster={poster}
                        onError={handleError}
                        style={{ display: 'block' }}
                    />
                )
            ) : (
                // Placeholder with poster image
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
