"use client"

import { motion } from "framer-motion"

export function ThreePillars() {
    const pillars = [
        {
            title: "Specialisation",
            description: "Most companies offering social media growth aren't truly social media growth companies. They are primarily Ads agencies, or video editing companies, or something similar, lacking the depth of specialisation.",
            highlight: "We, on the other hand, focus on one thing and we excel at it."
        },
        {
            title: "Strategy First",
            description: "Most companies focus on production or post-production, but social media success demands a strategy-first approach.",
            highlight: "Brings is a strategy first company - we are strategists at heart, not mere thinkers driving every decision."
        },
        {
            title: "Audiences, not Algorithms",
            description: "Many companies complicate social media with jargon about algorithms, simply because they lack real expertise.",
            highlight: "We believe social media is rooted in first principles: the better you understand your audience, the greater your chances of success."
        }
    ]

    return (
        <section className="w-full py-24 bg-background">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-center text-white mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Our <span className="italic">3 Pillars</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <h3 className="text-3xl md:text-4xl font-serif italic text-white mb-4">
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
