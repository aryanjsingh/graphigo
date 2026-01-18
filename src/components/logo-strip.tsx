"use client";

import { cn } from "@/lib/utils";

export function LogoStrip() {
    const logos = [
        "/Brand lOGOS/1.png",
        "/Brand lOGOS/3.png",
        "/Brand lOGOS/4.png",
        "/Brand lOGOS/5.png",
        "/Brand lOGOS/6.png",
        "/Brand lOGOS/7.png",
        "/Brand lOGOS/8.png",
        "/Brand lOGOS/9.png",
        "/Brand lOGOS/10.png",
        "/Brand lOGOS/11.png",
        "/Brand lOGOS/12.png",
        "/Brand lOGOS/13.png",
        "/Brand lOGOS/14.png",
        "/Brand lOGOS/15.png",
        "/Brand lOGOS/16.png",
    ]

    return (
        <section className="py-6 px-4 relative">
            {/* 3D Perspective Container */}
            <div
                className="w-full mx-auto overflow-hidden relative"
                style={{
                    perspective: '1200px',
                    perspectiveOrigin: 'center top'
                }}
            >
                {/* Cylindrical Strip with 3D Transform */}
                <div
                    className="relative"
                    style={{
                        transformStyle: 'preserve-3d',
                        transform: 'rotateX(8deg)',
                        maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
                    }}
                >
                    {/* Logo Container with Marquee */}
                    <div className="flex gap-16 md:gap-24 animate-marquee whitespace-nowrap items-center py-2">
                        {[...logos, ...logos].map((logo, i) => {
                            const isOriginalSize = logo.includes("/1.png") || logo.includes("/3.png");
                            return (
                                <div key={i} className="flex-shrink-0 flex items-center justify-center h-32 w-56">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={logo}
                                        alt={`Brand Logo ${i}`}
                                        className={cn(
                                            "w-auto max-w-full object-contain brightness-0 invert opacity-60 hover:opacity-90 transition-opacity duration-300",
                                            isOriginalSize ? "max-h-20" : "max-h-32"
                                        )}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <style jsx>{`
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
        </section>
    )
}
