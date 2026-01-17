"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function BeforeAfterComparison() {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-10 py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col items-center justify-center mb-16"
            >
                <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 text-center mb-4">
                    Transformation <span className="text-primary">Results</span>
                </h2>
                <p className="text-neutral-400 text-center max-w-2xl">
                    See the impact of professional editing and strategy on channel growth.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative">
                {/* Connector Line (Desktop) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                >
                    <div className="w-12 h-12 bg-neutral-900 border border-neutral-800 rounded-full flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 text-neutral-500"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                            />
                        </svg>
                    </div>
                </motion.div>

                {/* BEFORE CARD */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="relative group"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent rounded-3xl blur-xl" />
                    <div className="relative bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-3xl p-6 md:p-8 overflow-hidden h-full">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500/50 to-transparent opacity-50" />

                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-2xl font-bold text-white">Before</h3>
                            <span className="px-3 py-1 bg-red-500/10 text-red-400 border border-red-500/20 text-xs font-semibold rounded-full">
                                Struggling
                            </span>
                        </div>

                        {/* Mockup */}
                        <div className="bg-neutral-950 rounded-xl p-4 mb-8 border border-neutral-800/50">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-neutral-800 shrink-0 overflow-hidden">
                                    {/* Placeholder for user avatar */}
                                    <div className="w-full h-full bg-gradient-to-br from-neutral-700 to-neutral-800" />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold">The Powerful Humans</h4>
                                    <p className="text-neutral-500 text-xs">@ThePowerfulHumansOfficial</p>
                                </div>
                            </div>

                            <div className="inline-block px-4 py-2 bg-red-600 rounded-full text-white font-bold text-sm mb-6">
                                9.2K subscribers
                            </div>

                            {/* Graph Container */}
                            <div className="h-32 w-full bg-neutral-900/50 rounded-lg relative overflow-hidden flex items-end px-2 pb-2">
                                <svg className="w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none">
                                    <path
                                        d="M0,45 C20,44 40,43 60,40 C80,38 90,35 100,30"
                                        fill="none"
                                        stroke="#ef4444"
                                        strokeWidth="2"
                                        vectorEffect="non-scaling-stroke"
                                    />
                                </svg>
                                <div className="absolute bottom-2 left-2 text-[10px] text-neutral-600">6 May 2024</div>
                                <div className="absolute bottom-2 right-2 text-[10px] text-neutral-600">18 May 2024</div>
                            </div>
                        </div>

                        {/* Stats List */}
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-neutral-400">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500/50 shrink-0" />
                                <span>Channel stuck at 9K subs</span>
                            </li>
                            <li className="flex items-start gap-3 text-neutral-400">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500/50 shrink-0" />
                                <span>Drop off after 3 mins</span>
                            </li>
                            <li className="flex items-start gap-3 text-neutral-400">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500/50 shrink-0" />
                                <span>Thumbnails lacked click appeal</span>
                            </li>
                            <li className="flex items-start gap-3 text-neutral-400">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500/50 shrink-0" />
                                <span>Editing didn&apos;t hold attention</span>
                            </li>
                        </ul>
                    </div>
                </motion.div>

                {/* AFTER CARD */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="relative group"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl blur-xl" />
                    <div className="relative bg-gradient-to-b from-neutral-900/80 to-neutral-950/80 backdrop-blur-sm border border-primary/20 rounded-3xl p-6 md:p-8 overflow-hidden h-full">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-emerald-400 opacity-50" />

                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-2xl font-bold text-white">After</h3>
                            <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full">
                                Viral Growth
                            </span>
                        </div>

                        {/* Mockup */}
                        <div className="bg-neutral-950 rounded-xl p-4 mb-8 border border-neutral-800/50 relative overflow-hidden">
                            <div className="flex items-center gap-4 mb-6 relative z-10">
                                <div className="w-12 h-12 rounded-full bg-neutral-800 shrink-0 overflow-hidden">
                                    {/* Placeholder for user avatar */}
                                    <div className="w-full h-full bg-gradient-to-br from-neutral-600 to-neutral-700" />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold">The Powerful Humans</h4>
                                    <p className="text-neutral-500 text-xs">@ThePowerfulHumansOfficial</p>
                                </div>
                            </div>

                            <div className="inline-block px-4 py-2 bg-emerald-600 rounded-full text-white font-bold text-sm mb-6 relative z-10">
                                278K subscribers
                            </div>

                            {/* Graph Container */}
                            <div className="h-32 w-full bg-neutral-900/50 rounded-lg relative overflow-hidden flex items-end px-2 pb-2 z-10">
                                <svg className="w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none">
                                    <path
                                        d="M0,45 C20,45 30,30 50,20 C70,10 80,5 100,2"
                                        fill="none"
                                        stroke="#10b981"
                                        strokeWidth="2"
                                        vectorEffect="non-scaling-stroke"
                                    />
                                </svg>
                                <div className="absolute bottom-2 left-2 text-[10px] text-neutral-600">Jun 2024</div>
                                <div className="absolute bottom-2 right-2 text-[10px] text-neutral-600">Oct 2024</div>
                            </div>
                        </div>

                        {/* Stats List */}
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-white font-medium">
                                <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                                    <svg className="w-3 h-3 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span>100K+ subs in 27 days</span>
                            </li>
                            <li className="flex items-center gap-3 text-white font-medium">
                                <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                                    <svg className="w-3 h-3 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span>Avg View Duration upto 21 mins</span>
                            </li>
                            <li className="flex items-center gap-3 text-white font-medium">
                                <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                                    <svg className="w-3 h-3 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span>CTR doubled from 4% to 9%</span>
                            </li>
                            <li className="flex items-center gap-3 text-white font-medium">
                                <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                                    <svg className="w-3 h-3 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span>20M+ impressions in a month</span>
                            </li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
