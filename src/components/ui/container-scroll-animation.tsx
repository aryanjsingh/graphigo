"use client"

import { useEffect, useRef } from "react"

const images = [
    "/portrait-1.png",
    "/portrait-2.png",
    "/portrait-3.png",
    "/portrait-4.png",
    "/portrait-5.png",
    "/portrait-6.png",
    "/portrait-7.png",
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

        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
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
                            {/* Triple the images for seamless loop */}
                            {[...images, ...images, ...images].map((src, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105"
                                    style={{
                                        width: "280px",
                                        height: "420px",
                                        transform: `translateZ(${Math.sin(index * 0.5) * 20}px)`,
                                    }}
                                >
                                    <img
                                        src={src || "/placeholder.svg"}
                                        alt={`Portrait ${(index % images.length) + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
