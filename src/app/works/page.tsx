"use client";
import React from "react";
import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";
import { BackgroundBeams } from "@/components/ui/background-beams";

// Timeline Data with Real Graphigo Projects
const timelineData = [
    {
        title: "Long Form Content",
        content: (
            <div>
                <p className="text-neutral-300 text-xs md:text-sm font-normal mb-8">
                    Engaging long-form content that captivates audiences and drives meaningful engagement.
                </p>

                <div className="grid grid-cols-1 gap-6">
                    {/* ThinkSchool x Boult */}
                    <a
                        href="https://youtu.be/iH8IrBG4csM"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block bg-gradient-to-br from-neutral-900/80 to-neutral-950/80 backdrop-blur-sm rounded-2xl border border-neutral-800/50 hover:border-primary/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
                    >
                        <div className="relative aspect-video overflow-hidden">
                            <Image
                                src="https://img.youtube.com/vi/iH8IrBG4csM/maxresdefault.jpg"
                                alt="ThinkSchool x Boult"
                                width={1280}
                                height={720}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />

                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:bg-primary">
                                    <svg className="w-8 h-8 text-white fill-current ml-1" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>

                            <div className="absolute top-4 left-4">
                                <span className="px-3 py-1 bg-primary/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                                    Featured
                                </span>
                            </div>
                        </div>

                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                JioHotstar CTO reveals how IPL streams work! | ThinkSchool x Boult
                            </h3>
                            <p className="text-neutral-400 text-sm">
                                An in-depth conversation with industry leaders discussing technology and innovation behind streaming platforms.
                            </p>
                        </div>
                    </a>

                    {/* Marwadi University */}
                    <a
                        href="https://youtu.be/TQ4eXthvmDw"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block bg-gradient-to-br from-neutral-900/80 to-neutral-950/80 backdrop-blur-sm rounded-2xl border border-neutral-800/50 hover:border-primary/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
                    >
                        <div className="relative aspect-video overflow-hidden">
                            <Image
                                src="https://img.youtube.com/vi/TQ4eXthvmDw/maxresdefault.jpg"
                                alt="Marwadi University"
                                width={1280}
                                height={720}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />

                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:bg-primary">
                                    <svg className="w-8 h-8 text-white fill-current ml-1" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>

                            <div className="absolute top-4 left-4">
                                <span className="px-3 py-1 bg-emerald-600/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                                    Corporate
                                </span>
                            </div>
                        </div>

                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                Marwadi University | Educational Excellence
                            </h3>
                            <p className="text-neutral-400 text-sm">
                                Professional corporate video showcasing institutional excellence and vision.
                            </p>
                        </div>
                    </a>

                    {/* Off Filter Show x Graphigo */}
                    <a
                        href="https://youtu.be/E1bnDfy_pJI"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block bg-gradient-to-br from-neutral-900/80 to-neutral-950/80 backdrop-blur-sm rounded-2xl border border-neutral-800/50 hover:border-primary/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
                    >
                        <div className="relative aspect-video overflow-hidden">
                            <Image
                                src="https://img.youtube.com/vi/E1bnDfy_pJI/maxresdefault.jpg"
                                alt="Off Filter Show"
                                width={1280}
                                height={720}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />

                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:bg-primary">
                                    <svg className="w-8 h-8 text-white fill-current ml-1" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>

                            <div className="absolute top-4 left-4">
                                <span className="px-3 py-1 bg-purple-600/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                                    Podcast
                                </span>
                            </div>
                        </div>

                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                Off Filter Show x Graphigo | Unfiltered Conversations
                            </h3>
                            <p className="text-neutral-400 text-sm">
                                Authentic, unfiltered discussions bringing fresh perspectives and genuine insights.
                            </p>
                        </div>
                    </a>

                    {/* Avanti Nagral */}
                    <a
                        href="https://youtu.be/9uFoOYpNMqM"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block bg-gradient-to-br from-neutral-900/80 to-neutral-950/80 backdrop-blur-sm rounded-2xl border border-neutral-800/50 hover:border-primary/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
                    >
                        <div className="relative aspect-video overflow-hidden">
                            <Image
                                src="https://img.youtube.com/vi/9uFoOYpNMqM/maxresdefault.jpg"
                                alt="I ALMOST GOT ARRESTED!"
                                width={1280}
                                height={720}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />

                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:bg-primary">
                                    <svg className="w-8 h-8 text-white fill-current ml-1" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>

                            <div className="absolute top-4 left-4">
                                <span className="px-3 py-1 bg-red-600/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                                    Viral
                                </span>
                            </div>
                        </div>

                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                I ALMOST GOT ARRESTED! | Avanti Nagral
                            </h3>
                            <p className="text-neutral-400 text-sm">
                                High-energy content that hooks viewers from the first second with dramatic pacing and compelling narrative structure.
                            </p>
                        </div>
                    </a>

                    {/* Aakash Bhalla */}
                    <a
                        href="https://youtu.be/LT4uTGozm4s"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block bg-gradient-to-br from-neutral-900/80 to-neutral-950/80 backdrop-blur-sm rounded-2xl border border-neutral-800/50 hover:border-primary/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
                    >
                        <div className="relative aspect-video overflow-hidden">
                            <Image
                                src="https://img.youtube.com/vi/LT4uTGozm4s/maxresdefault.jpg"
                                alt="REJECTED vs HIRED"
                                width={1280}
                                height={720}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />

                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:bg-primary">
                                    <svg className="w-8 h-8 text-white fill-current ml-1" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>

                            <div className="absolute top-4 left-4">
                                <span className="px-3 py-1 bg-blue-600/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                                    Inspiring
                                </span>
                            </div>
                        </div>

                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                REJECTED vs HIRED | Aakash Bhalla
                            </h3>
                            <p className="text-neutral-400 text-sm">
                                A powerful story showcasing the journey from rejection to success, resonating with professionals worldwide.
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        ),
    },
    {
        title: "Podcast Production",
        content: (
            <div>
                <p className="text-neutral-300 text-xs md:text-sm font-normal mb-8">
                    From concept to completion - producing engaging podcast content that resonates.
                </p>

                <div className="grid grid-cols-1 gap-6">
                    {/* Jitu Podcast */}
                    <a
                        href="https://youtu.be/Z4XQj2Iuz98"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block bg-gradient-to-br from-neutral-900/80 to-neutral-950/80 backdrop-blur-sm rounded-2xl border border-neutral-800/50 hover:border-primary/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
                    >
                        <div className="relative aspect-video overflow-hidden">
                            <Image
                                src="https://img.youtube.com/vi/Z4XQj2Iuz98/maxresdefault.jpg"
                                alt="Jitu Podcast"
                                width={1280}
                                height={720}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />

                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:bg-primary">
                                    <svg className="w-8 h-8 text-white fill-current ml-1" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>

                            <div className="absolute top-4 left-4">
                                <span className="px-3 py-1 bg-purple-600/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                                    Podcast
                                </span>
                            </div>
                        </div>

                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                $1M/YEAR AGENCY MODEL | Jitu Podcast
                            </h3>
                            <p className="text-neutral-400 text-sm">
                                Breaking down complex business strategies into digestible, actionable content for aspiring entrepreneurs.
                            </p>
                        </div>
                    </a>

                    {/* ThinkSchool Boult */}
                    <a
                        href="https://youtu.be/iH8IrBG4csM"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block bg-gradient-to-br from-neutral-900/80 to-neutral-950/80 backdrop-blur-sm rounded-2xl border border-neutral-800/50 hover:border-primary/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
                    >
                        <div className="relative aspect-video overflow-hidden">
                            <Image
                                src="https://img.youtube.com/vi/iH8IrBG4csM/maxresdefault.jpg"
                                alt="ThinkSchool x Boult Podcast"
                                width={1280}
                                height={720}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />

                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:bg-primary">
                                    <svg className="w-8 h-8 text-white fill-current ml-1" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>

                            <div className="absolute top-4 left-4">
                                <span className="px-3 py-1 bg-purple-600/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                                    Podcast
                                </span>
                            </div>
                        </div>

                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                JioHotstar CTO reveals how IPL streams work! | ThinkSchool x Boult
                            </h3>
                            <p className="text-neutral-400 text-sm">
                                An in-depth conversation with industry leaders discussing technology and innovation behind streaming platforms.
                            </p>
                        </div>
                    </a>

                    {/* Off Filter Show */}
                    <a
                        href="https://youtu.be/E1bnDfy_pJI"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block bg-gradient-to-br from-neutral-900/80 to-neutral-950/80 backdrop-blur-sm rounded-2xl border border-neutral-800/50 hover:border-primary/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
                    >
                        <div className="relative aspect-video overflow-hidden">
                            <Image
                                src="https://img.youtube.com/vi/E1bnDfy_pJI/maxresdefault.jpg"
                                alt="Off Filter Show"
                                width={1280}
                                height={720}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />

                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:bg-primary">
                                    <svg className="w-8 h-8 text-white fill-current ml-1" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>

                            <div className="absolute top-4 left-4">
                                <span className="px-3 py-1 bg-purple-600/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                                    Podcast
                                </span>
                            </div>
                        </div>

                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                Off Filter Show x Graphigo | Unfiltered Conversations
                            </h3>
                            <p className="text-neutral-400 text-sm">
                                Authentic, unfiltered discussions bringing fresh perspectives and genuine insights.
                            </p>
                        </div>
                    </a>

                    {/* ThinkSchool x Manyavar */}
                    <a
                        href="https://youtu.be/-tbJl3rrN78"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block bg-gradient-to-br from-neutral-900/80 to-neutral-950/80 backdrop-blur-sm rounded-2xl border border-neutral-800/50 hover:border-primary/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
                    >
                        <div className="relative aspect-video overflow-hidden">
                            <Image
                                src="https://img.youtube.com/vi/-tbJl3rrN78/maxresdefault.jpg"
                                alt="ThinkSchool x Manyavar"
                                width={1280}
                                height={720}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />

                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:bg-primary">
                                    <svg className="w-8 h-8 text-white fill-current ml-1" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>

                            <div className="absolute top-4 left-4">
                                <span className="px-3 py-1 bg-purple-600/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                                    Podcast
                                </span>
                            </div>
                        </div>

                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                THE MAN WHO GOT KASAB HANGED | ThinkSchool x Manyavar
                            </h3>
                            <p className="text-neutral-400 text-sm">
                                Cinematic storytelling combining brand narrative with powerful historical storytelling.
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        ),
    },
    {
        title: "Post Production",
        content: (
            <div>
                <p className="text-neutral-300 text-xs md:text-sm font-normal mb-8">
                    Polished, professional finishing that transforms raw footage into captivating stories.
                </p>

                <div className="grid grid-cols-1 gap-6">
                    {/* ThinkSchool x Manyavar */}
                    <a
                        href="https://youtu.be/-tbJl3rrN78"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block bg-gradient-to-br from-neutral-900/80 to-neutral-950/80 backdrop-blur-sm rounded-2xl border border-neutral-800/50 hover:border-primary/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
                    >
                        <div className="relative aspect-video overflow-hidden">
                            <Image
                                src="https://img.youtube.com/vi/-tbJl3rrN78/maxresdefault.jpg"
                                alt="ThinkSchool x Manyavar"
                                width={1280}
                                height={720}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />

                            {/* Play Button */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:bg-primary">
                                    <svg className="w-8 h-8 text-white fill-current ml-1" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>

                            {/* Badge */}
                            <div className="absolute top-4 left-4">
                                <span className="px-3 py-1 bg-amber-600/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                                    Brand Film
                                </span>
                            </div>
                        </div>

                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                THE MAN WHO GOT KASAB HANGED | ThinkSchool x Manyavar
                            </h3>
                            <p className="text-neutral-400 text-sm">
                                Cinematic storytelling combining brand narrative with powerful historical storytelling.
                            </p>
                        </div>
                    </a>

                    {/* Marwadi University */}
                    <a
                        href="https://youtu.be/TQ4eXthvmDw"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block bg-gradient-to-br from-neutral-900/80 to-neutral-950/80 backdrop-blur-sm rounded-2xl border border-neutral-800/50 hover:border-primary/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
                    >
                        <div className="relative aspect-video overflow-hidden">
                            <Image
                                src="https://img.youtube.com/vi/TQ4eXthvmDw/maxresdefault.jpg"
                                alt="Marwadi University"
                                width={1280}
                                height={720}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />

                            {/* Play Button */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:bg-primary">
                                    <svg className="w-8 h-8 text-white fill-current ml-1" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>

                            {/* Badge */}
                            <div className="absolute top-4 left-4">
                                <span className="px-3 py-1 bg-amber-600/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                                    Corporate
                                </span>
                            </div>
                        </div>

                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                Marwadi University | Educational Excellence
                            </h3>
                            <p className="text-neutral-400 text-sm">
                                Professional corporate video showcasing institutional excellence and vision.
                            </p>
                        </div>
                    </a>

                    {/* Superlon Brand Film */}
                    <div className="group block bg-gradient-to-br from-neutral-900/80 to-neutral-950/80 backdrop-blur-sm rounded-2xl border border-neutral-800/50 hover:border-primary/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                        <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-red-950/20 to-neutral-950">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                    <h4 className="text-6xl font-bold text-red-500/80 mb-2">Superlon</h4>
                                    <p className="text-neutral-400 text-sm">Brand Showcase</p>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                            {/* Badge */}
                            <div className="absolute top-4 left-4">
                                <span className="px-3 py-1 bg-amber-600/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                                    Brand Film
                                </span>
                            </div>
                        </div>

                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                Superlon Brand Film
                            </h3>
                            <p className="text-neutral-400 text-sm">
                                Created a complete brand film showcasing their factory and office for a client presentation. Premium thermal insulation brand storytelling.
                            </p>
                        </div>
                    </div>

                    {/* HDFC Sky */}
                    <div className="group block bg-gradient-to-br from-neutral-900/80 to-neutral-950/80 backdrop-blur-sm rounded-2xl border border-neutral-800/50 hover:border-primary/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                        <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-blue-950/20 to-neutral-950">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="flex items-center justify-center gap-3 mb-2">
                                        <span className="text-4xl font-bold text-blue-500">HDFC</span>
                                        <span className="text-4xl font-bold text-primary">SKY</span>
                                    </div>
                                    <p className="text-neutral-400 text-sm">Margin Trading</p>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                            {/* Badge */}
                            <div className="absolute top-4 left-4">
                                <span className="px-3 py-1 bg-blue-600/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                                    Post Production
                                </span>
                            </div>
                        </div>

                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                HDFC Sky | Margin Trading
                            </h3>
                            <p className="text-neutral-400 text-sm">
                                Post-production and influencer marketing collaboration with Manveer Singh. Delivered under Puretech Digital, Mumbai.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: "Short Form Content",
        content: (
            <div>
                <p className="text-neutral-300 text-xs md:text-sm font-normal mb-8">
                    Viral-worthy reels and shorts designed to capture attention and drive engagement.
                </p>

                {/* Dezerv Reels */}
                <div className="mb-8 bg-neutral-900/50 backdrop-blur-sm rounded-xl p-6 border border-neutral-800">
                    <h3 className="text-2xl font-bold text-white mb-2">Dezerv - Financial Education Reels</h3>
                    <p className="text-neutral-400 mb-4">Making finance accessible and engaging</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="aspect-[9/16] bg-neutral-800 rounded-lg overflow-hidden">
                                <Image
                                    src={`https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&auto=format&fit=crop&q=60&crop=entropy&cs=tinysrgb&h=${700 + i * 50}`}
                                    alt={`Dezerv reel ${i}`}
                                    width={300}
                                    height={500}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-neutral-400">
                        Created engaging short-form content that simplifies complex financial
                        concepts for a modern audience.
                    </p>
                </div>

                {/* Global Diwali Content */}
                <div className="mb-8 bg-neutral-900/50 backdrop-blur-sm rounded-xl p-6 border border-neutral-800">
                    <h3 className="text-2xl font-bold text-white mb-2">How DIWALI is celebrated globally</h3>
                    <p className="text-neutral-400 mb-4">Cultural storytelling across borders</p>
                    <div className="rounded-lg overflow-hidden mb-4">
                        <Image
                            src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=800&auto=format&fit=crop"
                            alt="Diwali celebrations"
                            width={800}
                            height={450}
                            className="w-full h-64 object-cover"
                        />
                    </div>
                    <p className="text-sm text-neutral-400">
                        Showcasing the diversity of Diwali celebrations around the world through
                        dynamic edits and vibrant visuals.
                    </p>
                </div>

                {/* Want More Followers */}
                <div className="bg-neutral-900/50 backdrop-blur-sm rounded-xl p-6 border border-neutral-800">
                    <h3 className="text-2xl font-bold text-white mb-2">WANT MORE FOLLOWERS?</h3>
                    <p className="text-neutral-400 mb-4">Growth-focused educational content</p>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="aspect-[9/16] bg-neutral-800 rounded-lg overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&auto=format&fit=crop"
                                alt="Social media growth"
                                width={300}
                                height={500}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col justify-center">
                            <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-6 rounded-lg mb-3">
                                <p className="text-4xl font-bold text-white">100K+</p>
                                <p className="text-sm text-neutral-200">Views Generated</p>
                            </div>
                            <p className="text-sm text-neutral-400">
                                Strategic content designed to educate creators on growth tactics.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: "Case Studies",
        content: (
            <div>
                <p className="text-neutral-300 text-xs md:text-sm font-normal mb-8">
                    Proven results that speak louder than words. Real growth, real impact.
                </p>

                {/* CA Surbhi Gandhi */}
                <div className="mb-8 bg-gradient-to-br from-emerald-950 to-neutral-900 backdrop-blur-sm rounded-xl p-6 border border-emerald-800/50">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-emerald-600 p-2 rounded-lg">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white">CA Surbhi Gandhi</h3>
                    </div>
                    <p className="text-primary text-sm font-semibold mb-4">Founder Profiro and Creator</p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-neutral-950/50 border border-emerald-700/30 p-6 rounded-lg text-center">
                            <p className="text-sm text-neutral-400 mb-1">Starting Point</p>
                            <p className="text-4xl font-bold text-white">1K</p>
                            <p className="text-xs text-neutral-500 mt-1">subscribers</p>
                        </div>
                        <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 p-6 rounded-lg text-center">
                            <p className="text-sm text-emerald-100 mb-1">Current</p>
                            <p className="text-4xl font-bold text-white">66K</p>
                            <p className="text-xs text-emerald-200 mt-1">subscribers</p>
                        </div>
                    </div>

                    <div className="bg-neutral-950/50 border border-emerald-700/30 rounded-lg p-4 mb-4">
                        <h4 className="text-lg font-semibold text-emerald-400 mb-3">Right Strategy and Production</h4>
                        <ul className="space-y-2 text-sm text-neutral-300">
                            <li className="flex items-start gap-2">
                                <span className="text-emerald-500 mt-1">✓</span>
                                <span>Expert CA exam preparation content with strategic planning</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-emerald-500 mt-1">✓</span>
                                <span>Professional production quality enhancing educational value</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-emerald-500 mt-1">✓</span>
                                <span>Algorithm-optimized thumbnails and hooks for maximum reach</span>
                            </li>
                        </ul>
                    </div>

                    <div className="flex items-center justify-between bg-emerald-900/30 border border-emerald-700/30 rounded-lg p-4">
                        <div>
                            <p className="text-2xl font-bold text-emerald-400">4 Months</p>
                            <p className="text-sm text-neutral-400">Timeframe</p>
                        </div>
                        <div className="text-right">
                            <p className="text-sm text-neutral-400">Platform</p>
                            <p className="text-lg font-semibold text-white">YouTube</p>
                        </div>
                    </div>
                </div>

                {/* Jitu IG Coach */}
                <div className="bg-gradient-to-br from-purple-950 to-neutral-900 backdrop-blur-sm rounded-xl p-6 border border-purple-800/50">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-purple-600 p-2 rounded-lg">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white">Jitu IG Coach</h3>
                    </div>
                    <p className="text-primary text-sm font-semibold mb-4">Instagram Coach and Creator</p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-neutral-950/50 border border-purple-700/30 p-6 rounded-lg text-center">
                            <p className="text-sm text-neutral-400 mb-1">Before</p>
                            <p className="text-4xl font-bold text-white">100K</p>
                            <p className="text-xs text-neutral-500 mt-1">followers</p>
                        </div>
                        <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-6 rounded-lg text-center">
                            <p className="text-sm text-purple-100 mb-1">After</p>
                            <p className="text-4xl font-bold text-white">400K</p>
                            <p className="text-xs text-purple-200 mt-1">followers</p>
                        </div>
                    </div>

                    <div className="bg-neutral-950/50 border border-purple-700/30 rounded-lg p-4 mb-4">
                        <h4 className="text-lg font-semibold text-purple-400 mb-3">Right Hooks and Production</h4>
                        <ul className="space-y-2 text-sm text-neutral-300">
                            <li className="flex items-start gap-2">
                                <span className="text-purple-500 mt-1">✓</span>
                                <span>Generated 3.5B+ Views & 3M+ followers through viral content</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-purple-500 mt-1">✓</span>
                                <span>Perfected hook strategies for maximum engagement and retention</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-purple-500 mt-1">✓</span>
                                <span>Premium production quality optimized for Instagram algorithm</span>
                            </li>
                        </ul>
                    </div>

                    <div className="flex items-center justify-between bg-purple-900/30 border border-purple-700/30 rounded-lg p-4">
                        <div>
                            <p className="text-2xl font-bold text-purple-400">3 Months</p>
                            <p className="text-sm text-neutral-400">Timeframe</p>
                        </div>
                        <div className="text-right">
                            <p className="text-sm text-neutral-400">Platform</p>
                            <p className="text-lg font-semibold text-white">Instagram</p>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
];

export default function WorksPage() {
    return (
        <div className="w-full h-full bg-neutral-950 relative antialiased">
            <BackgroundBeams />

            {/* Header Removed as per request, added space for navbar */}
            <div className="pt-40"></div>

            {/* Timeline Component */}
            <div className="relative z-10">
                <Timeline data={timelineData} />
            </div>
        </div>
    );
}
