"use client";

import React from "react";
import { Marquee } from "./marquee";
import { cn } from "@/lib/utils";

export type Testimonial = {
    quote: string;
    name: string;
    designation: string;
    src: string;
};

const TestimonialCard = ({
    testimonial,
}: {
    testimonial: Testimonial;
}) => {
    return (
        <div
            className={cn(
                "relative h-full w-[350px] max-w-full overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 p-6 shadow-xl",
                "flex flex-col justify-between"
            )}
        >
            <div className="flex flex-col gap-4">
                <div className="flex flex-row items-center gap-4">
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-neutral-700">
                        <img
                            src={testimonial.src}
                            alt={testimonial.name}
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-sm font-bold text-white">{testimonial.name}</h3>
                        <p className="text-xs text-neutral-500">{testimonial.designation}</p>
                    </div>
                </div>
                <p className="text-sm leading-relaxed text-neutral-300">
                    "{testimonial.quote}"
                </p>
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
        </div>
    );
};

export const MarqueeTestimonials = ({
    testimonials,
    className,
}: {
    testimonials: Testimonial[];
    className?: string;
}) => {
    // Split testimonials into two rows
    const mid = Math.ceil(testimonials.length / 2);
    const firstRow = testimonials.slice(0, mid);
    const secondRow = testimonials.slice(mid);

    return (
        <div className={cn("relative flex h-full w-full flex-col items-center justify-center gap-12 overflow-hidden bg-background py-24", className)}>
            <div className="text-center space-y-4 mb-8">
                <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                    Beyond <span className="text-primary">founders</span> <br className="md:hidden" />
                    and <span className="text-primary">creators.</span>
                </h2>
            </div>
            <div className="flex flex-col gap-4 w-full">
                <Marquee pauseOnHover className="[--duration:40s]">
                    {firstRow.map((testimonial, idx) => (
                        <TestimonialCard key={idx} testimonial={testimonial} />
                    ))}
                </Marquee>
                <Marquee pauseOnHover direction="right" className="[--duration:40s]">
                    {secondRow.map((testimonial, idx) => (
                        <TestimonialCard key={idx} testimonial={testimonial} />
                    ))}
                </Marquee>
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background dark:from-background" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background dark:from-background" />
        </div>
    );
};
