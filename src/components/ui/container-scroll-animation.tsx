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
                {/* Tilted carousel track */}
                <div
                    className="relative"
                    style={{
                        transform: "rotateX(10deg)",
                        transformStyle: "preserve-3d",
                    }}
                >
                    <div
                        className="overflow-hidden py-8"
                        style={{
                            maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                        }}
                    >
                        <div className="flex gap-4 animate-scroll-left">
                            {/* Multiply images for seamless infinite loop - Optimized to 2x for performance */}
                            {Array(2).fill(images).flat().map((src, index) => (
                                <div
                                    key={index}
                                    className="relative flex-shrink-0 overflow-hidden shadow-2xl rounded-2xl border border-white/10 bg-neutral-900/20 group"
                                    style={{
                                        width: "280px",
                                        height: "420px",
                                        transform: `translateZ(${Math.sin(index * 0.5) * 20}px)`,
                                    }}
                                >
                                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent z-20" />
                                    <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
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
