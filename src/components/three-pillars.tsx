"use client"

import { motion } from "framer-motion"
import { Layers, Target, Users } from "lucide-react"

export function ThreePillars() {
    const pillars = [
        {
            icon: Layers,
            title: "Specialisation",
            description: "Most companies offering social media growth aren't truly social media growth companies. They are primarily Ads agencies, or video editing companies, or something similar, lacking the depth of specialisation.",
            highlight: "We, on the other hand, focus on one thing and we excel at it."
        },
        {
            icon: Target,
            title: "Strategy First",
            description: "Most companies focus on production or post-production, but social media success demands a strategy-first approach.",
            highlight: "Brings is a strategy first company - we are strategists at heart, not mere thinkers driving every decision."
        },
        {
            icon: Users,
            title: "Audiences, not Algorithms",
            description: "Many companies complicate social media with jargon about algorithms, simply because they lack real expertise.",
            highlight: "We believe social media is rooted in first principles: the better you understand your audience, the greater your chances of success."
        }
    ]

    return (
        <section className="w-full py-24 bg-neutral-950">
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
                            className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8 relative overflow-hidden group"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{
                                scale: 1.02,
                                y: -8,
                                transition: { duration: 0.3 }
                            }}
                        >
                            {/* Animated gradient background on hover */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                initial={{ opacity: 0 }}
                            />

                            {/* Glowing border effect */}
                            <motion.div
                                className="absolute inset-0 rounded-2xl"
                                initial={{ opacity: 0 }}
                                whileHover={{
                                    opacity: 1,
                                    boxShadow: "0 0 20px rgba(255, 107, 53, 0.3), 0 0 40px rgba(255, 107, 53, 0.1)",
                                    transition: { duration: 0.3 }
                                }}
                            />

                            <div className="relative z-10">
                                <motion.div
                                    className="mb-6"
                                    whileHover={{
                                        scale: 1.1,
                                        rotate: 5,
                                        transition: { duration: 0.3 }
                                    }}
                                >
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                                        <pillar.icon className="w-6 h-6 text-primary" />
                                    </div>
                                </motion.div>

                                <motion.h3
                                    className="text-xl md:text-2xl font-serif italic text-white mb-4"
                                    initial={{ y: 0 }}
                                    whileHover={{ y: -2, transition: { duration: 0.2 } }}
                                >
                                    {pillar.title}
                                </motion.h3>

                                <motion.p
                                    className="text-neutral-400 text-sm md:text-base leading-relaxed mb-4"
                                    initial={{ opacity: 0.8 }}
                                    whileHover={{ opacity: 1, transition: { duration: 0.2 } }}
                                >
                                    {pillar.description}
                                </motion.p>

                                <motion.p
                                    className="text-white text-sm md:text-base leading-relaxed font-medium"
                                    initial={{ y: 0, opacity: 0.9 }}
                                    whileHover={{
                                        y: -2,
                                        opacity: 1,
                                        transition: { duration: 0.2 }
                                    }}
                                >
                                    {pillar.highlight}
                                </motion.p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
