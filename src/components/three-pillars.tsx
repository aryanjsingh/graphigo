"use client"

import { motion } from "framer-motion"

export function ThreePillars() {
    const pillars = [
        {
            title: "Strategy First",
            description: "We don't just edit videos—we craft content strategies that align with your brand goals and audience needs.",
            highlight: "Every project starts with a clear strategy, ensuring your content performs and resonates."
        },
        {
            title: "Reliable Turnaround",
            description: "Deadlines matter. We pride ourselves on delivering high-quality work on time, every time.",
            highlight: "Consistency and reliability are at the core of how we operate—no delays, no excuses."
        },
        {
            title: "Creative Excellence",
            description: "Our team brings creativity and technical expertise together to produce content that stands out.",
            highlight: "We push creative boundaries while maintaining the polish and professionalism your brand deserves."
        }
    ]

    return (
        <section className="w-full py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        className="text-4xl md:text-5xl lg:text-6xl font-public-sans font-bold text-left text-white mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Our <span className="text-primary">3 Pillars</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            className="relative bg-neutral-900/20 backdrop-blur-3xl border border-white/10 shadow-[0_8px_32px_0_rgba(255,255,255,0.05)] rounded-2xl p-8 overflow-hidden group"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <h3 className="text-3xl md:text-4xl font-public-sans font-bold text-white mb-4">
                                {pillar.title}
                            </h3>

                            <p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-4">
                                {pillar.description}
                            </p>

                            <p className="text-white text-sm md:text-base leading-relaxed font-medium">
                                {pillar.highlight}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
