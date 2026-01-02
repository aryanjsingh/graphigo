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
        <section className="py-4 px-4 relative">
            <div className="w-full mx-auto overflow-hidden relative">
                {/* Fade Gradients */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-neutral-950 to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-neutral-950 to-transparent z-10" />

                <div className="flex gap-16 md:gap-24 animate-marquee whitespace-nowrap items-center">
                    {[...logos, ...logos].map((logo, i) => {
                        const isOriginalSize = logo.includes("/1.png") || logo.includes("/3.png");
                        return (
                            <div key={i} className="flex-shrink-0 flex items-center justify-center h-40 w-64">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={logo}
                                    alt={`Brand Logo ${i}`}
                                    className={cn(
                                        "w-auto max-w-full object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300",
                                        isOriginalSize ? "max-h-24" : "max-h-40"
                                    )}
                                />
                            </div>
                        )
                    })}
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
