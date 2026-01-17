"use client"

import { useEffect, useRef } from "react"
import { LazyVideo } from "./lazy-video"

const images = [
    "https://jpvdsqwonlhrhjgcmyuf.supabase.co/storage/v1/object/public/video/dd.mp4",
    "https://jpvdsqwonlhrhjgcmyuf.supabase.co/storage/v1/object/public/video/bb.mp4",
    "https://jpvdsqwonlhrhjgcmyuf.supabase.co/storage/v1/object/public/video/gg.mp4",
    "https://jpvdsqwonlhrhjgcmyuf.supabase.co/storage/v1/object/public/video/aa.mp4",
    "https://jpvdsqwonlhrhjgcmyuf.supabase.co/storage/v1/object/public/video/hh.mp4",
    "https://jpvdsqwonlhrhjgcmyuf.supabase.co/storage/v1/object/public/video/cc.mp4",
    "https://jpvdsqwonlhrhjgcmyuf.supabase.co/storage/v1/object/public/video/ee.mp4",
    "https://jpvdsqwonlhrhjgcmyuf.supabase.co/storage/v1/object/public/video/ii.mp4",
    "https://jpvdsqwonlhrhjgcmyuf.supabase.co/storage/v1/object/public/video/ff.mp4",
]

export function SimpleCollection() {
    return (
        <section className="py-24 overflow-hidden">
            <div className="flex justify-center mb-12">
                <span className="px-6 py-2 rounded-full border border-neutral-700 text-neutral-300 text-sm">
                    Simple Collection
                </span>
            </div>

            <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
        }

      `}</style>

            {/* First 3D Perspective Container */}
            <div
                className="relative mb-8"
                style={{
                    perspective: "1000px",
                    perspectiveOrigin: "center center",
                }}
            >
                {/* Glowing gradient background */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none">
                    <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/40 via-cyan-500/10 to-transparent blur-[60px]" />
                </div>

                {/* Fade overlays */}
                <div className="absolute left-0 top-0 bottom-0 w-48 z-10 pointer-events-none bg-gradient-to-r from-neutral-950 to-transparent" />
                <div className="absolute right-0 top-0 bottom-0 w-48 z-10 pointer-events-none bg-gradient-to-l from-neutral-950 to-transparent" />

                {/* Tilted carousel track */}
                <div
                    className="relative"
                    style={{
                        transform: "rotateX(10deg) rotateY(-5deg)",
                        transformStyle: "preserve-3d",
                    }}
                >
                    <div
                        className="overflow-hidden py-8"
                        style={{
                            maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                            WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                        }}
                    >
                        <div className="flex gap-4 animate-scroll-left">
                            {/* Multiply images for seamless infinite loop - Optimized to 2x for performance */}
                            {Array(2).fill(images).flat().map((src, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 overflow-hidden shadow-2xl"
                                    style={{
                                        width: "280px",
                                        height: "420px",
                                        transform: `translateZ(${Math.sin(index * 0.5) * 20}px)`,
                                    }}
                                >
                                    {src.endsWith('.mp4') ? (
                                        <LazyVideo
                                            src={src}
                                            className="w-full h-full object-cover"
                                            poster={`/posters/${src.split('/').pop()?.replace('.mp4', '.jpg')}`}
                                        />
                                    ) : (
                                        <img
                                            src={src || "/placeholder.svg"}
                                            alt={`Portrait ${(index % images.length) + 1}`}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
