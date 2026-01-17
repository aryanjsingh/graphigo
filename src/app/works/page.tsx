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

                {/* REJECTED HIRED Project */}
                <div className="mb-8 bg-neutral-900/50 backdrop-blur-sm rounded-xl p-6 border border-neutral-800">
                    <h3 className="text-2xl font-bold text-white mb-2">REJECTED → HIRED</h3>
                    <p className="text-neutral-400 mb-4">A compelling narrative of perseverance and success</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <a href="https://youtu.be/LT4uTGozm4s" target="_blank" rel="noopener noreferrer" className="block rounded-lg overflow-hidden group relative">
                            <Image
                                src="https://img.youtube.com/vi/LT4uTGozm4s/maxresdefault.jpg"
                                alt="REJECTED vs HIRED"
                                width={500}
                                height={300}
                                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                </div>
                            </div>
                        </a>
                        <div className="flex flex-col justify-center">
                            <p className="text-sm text-neutral-400 mb-2">
                                A powerful story showcasing the journey from rejection to success,
                                resonating with professionals worldwide.
                            </p>
                        </div>
                    </div>
                </div>

                {/* I ALMOST GOT ARRESTED Project */}
                <div className="mb-8 bg-neutral-900/50 backdrop-blur-sm rounded-xl p-6 border border-neutral-800">
                    <h3 className="text-2xl font-bold text-white mb-2">I ALMOST GOT ARRESTED!</h3>
                    <p className="text-neutral-400 mb-4">Viral storytelling at its finest</p>
                    <a href="https://youtu.be/9uFoOYpNMqM" target="_blank" rel="noopener noreferrer" className="block rounded-lg overflow-hidden mb-4 group relative">
                        <Image
                            src="https://img.youtube.com/vi/9uFoOYpNMqM/maxresdefault.jpg"
                            alt="I ALMOST GOT ARRESTED!"
                            width={800}
                            height={400}
                            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <svg className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                            </div>
                        </div>
                    </a>
                    <p className="text-sm text-neutral-400">
                        High-energy content that hooks viewers from the first second with
                        dramatic pacing and compelling narrative structure.
                    </p>
                </div>

                {/* $1M/YEAR AGENCY MODEL */}
                <div className="bg-neutral-900/50 backdrop-blur-sm rounded-xl p-6 border border-neutral-800">
                    <h3 className="text-2xl font-bold text-white mb-2">$1M/YEAR AGENCY MODEL</h3>
                    <p className="text-neutral-400 mb-4">Educational content that delivers value</p>
                    <a href="https://youtu.be/Z4XQj2Iuz98" target="_blank" rel="noopener noreferrer" className="block rounded-lg overflow-hidden mb-4 group relative">
                        <Image
                            src="https://img.youtube.com/vi/Z4XQj2Iuz98/maxresdefault.jpg"
                            alt="$1M/YEAR AGENCY MODEL"
                            width={800}
                            height={400}
                            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <svg className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                            </div>
                        </div>
                    </a>
                    <p className="text-sm text-neutral-400">
                        Breaking down complex business strategies into digestible,
                        actionable content for aspiring entrepreneurs.
                    </p>
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
        title: "Corporate & Commercial",
        content: (
            <div>
                <p className="text-neutral-300 text-xs md:text-sm font-normal mb-8">
                    Professional corporate videos that elevate brand presence and communicate value.
                </p>

                {/* Superton */}
                <div className="mb-8 bg-neutral-900/50 backdrop-blur-sm rounded-xl p-6 border border-neutral-800">
                    <h3 className="text-2xl font-bold text-white mb-2">Superton</h3>
                    <p className="text-neutral-400 mb-4">Sound systems brand showcase</p>
                    <div className="rounded-lg overflow-hidden mb-4">
                        <Image
                            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop"
                            alt="Audio equipment"
                            width={800}
                            height={450}
                            className="w-full h-64 object-cover"
                        />
                    </div>
                    <p className="text-sm text-neutral-400">
                        Cinematic product showcase highlighting premium audio technology with
                        sleek visuals and dynamic camera work.
                    </p>
                </div>

                {/* HDFC SKY */}
                <div className="bg-neutral-900/50 backdrop-blur-sm rounded-xl p-6 border border-neutral-800">
                    <h3 className="text-2xl font-bold text-white mb-2">HDFC SKY - Margin Trading Platform</h3>
                    <p className="text-neutral-400 mb-4">Financial technology explainer</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="rounded-lg overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&auto=format&fit=crop"
                                alt="Trading platform"
                                width={500}
                                height={300}
                                className="w-full h-48 object-cover"
                            />
                        </div>
                        <div className="flex flex-col justify-center bg-gradient-to-br from-blue-900 to-purple-900 rounded-lg p-6">
                            <h4 className="text-xl font-bold text-white mb-2">Key Features</h4>
                            <ul className="text-sm text-neutral-300 space-y-1">
                                <li>• Clear financial messaging</li>
                                <li>• Professional presentation</li>
                                <li>• Trust-building visuals</li>
                            </ul>
                        </div>
                    </div>
                    <p className="text-sm text-neutral-400">
                        Professional explainer video demystifying margin trading with clear,
                        confident messaging for HDFC&apos;s digital platform.
                    </p>
                </div>
            </div>
        ),
    },
    {
        title: "Events & Global Projects",
        content: (
            <div>
                <p className="text-neutral-300 text-xs md:text-sm font-normal mb-8">
                    Capturing moments that matter, from Dubai to global stages.
                </p>

                {/* MECL Dubai Event */}
                <div className="mb-8 bg-neutral-900/50 backdrop-blur-sm rounded-xl p-6 border border-neutral-800">
                    <h3 className="text-2xl font-bold text-white mb-2">MECL Event Edit (Dubai)</h3>
                    <p className="text-neutral-400 mb-4">International event coverage</p>
                    <div className="rounded-lg overflow-hidden mb-4">
                        <Image
                            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop"
                            alt="Dubai event"
                            width={800}
                            height={450}
                            className="w-full h-64 object-cover"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="bg-amber-900/30 border border-amber-700/50 p-4 rounded-lg">
                            <p className="text-2xl font-bold text-amber-400">Dubai</p>
                            <p className="text-sm text-neutral-400">International Venue</p>
                        </div>
                        <div className="bg-blue-900/30 border border-blue-700/50 p-4 rounded-lg">
                            <p className="text-2xl font-bold text-blue-400">Corporate</p>
                            <p className="text-sm text-neutral-400">Event Type</p>
                        </div>
                    </div>
                    <p className="text-sm text-neutral-400">
                        Professional event videography capturing the essence of a major corporate
                        gathering in Dubai with cinematic quality.
                    </p>
                </div>

                {/* Saeed AlFalasi */}
                <div className="bg-neutral-900/50 backdrop-blur-sm rounded-xl p-6 border border-neutral-800">
                    <h3 className="text-2xl font-bold text-white mb-2">Saeed AlFalasi - Salon on Wheels</h3>
                    <p className="text-neutral-400 mb-4">Innovative business showcase</p>
                    <div className="rounded-lg overflow-hidden mb-4">
                        <Image
                            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&auto=format&fit=crop"
                            alt="Mobile salon"
                            width={800}
                            height={450}
                            className="w-full h-64 object-cover"
                        />
                    </div>
                    <p className="text-sm text-neutral-400">
                        Documenting an innovative mobile salon concept with sleek visuals and
                        compelling storytelling for a UAE-based entrepreneur.
                    </p>
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

                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-neutral-950/50 border border-emerald-700/30 p-6 rounded-lg text-center">
                            <p className="text-sm text-neutral-400 mb-1">Starting Point</p>
                            <p className="text-4xl font-bold text-white">1K</p>
                            <p className="text-xs text-neutral-500 mt-1">subscribers</p>
                        </div>
                        <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 p-6 rounded-lg text-center">
                            <p className="text-sm text-emerald-100 mb-1">Current</p>
                            <p className="text-4xl font-bold text-white">55K</p>
                            <p className="text-xs text-emerald-200 mt-1">subscribers</p>
                        </div>
                    </div>

                    <div className="bg-neutral-950/50 border border-emerald-700/30 rounded-lg p-4 mb-4">
                        <h4 className="text-lg font-semibold text-emerald-400 mb-3">Growth Strategy</h4>
                        <ul className="space-y-2 text-sm text-neutral-300">
                            <li className="flex items-start gap-2">
                                <span className="text-emerald-500 mt-1">✓</span>
                                <span>Strategic content planning focused on CA exam preparation</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-emerald-500 mt-1">✓</span>
                                <span>Consistent posting schedule with high-value educational content</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-emerald-500 mt-1">✓</span>
                                <span>Engaging thumbnails and hooks designed for YouTube algorithm</span>
                            </li>
                        </ul>
                    </div>

                    <div className="flex items-center justify-between bg-emerald-900/30 border border-emerald-700/30 rounded-lg p-4">
                        <div>
                            <p className="text-2xl font-bold text-emerald-400">5,400%</p>
                            <p className="text-sm text-neutral-400">Growth Rate</p>
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
                        <h3 className="text-2xl font-bold text-white">Jitu - Instagram Coach</h3>
                    </div>

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
                        <h4 className="text-lg font-semibold text-purple-400 mb-3">Winning Formula</h4>
                        <ul className="space-y-2 text-sm text-neutral-300">
                            <li className="flex items-start gap-2">
                                <span className="text-purple-500 mt-1">✓</span>
                                <span>Viral-worthy reels with proven hooks and retention strategies</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-purple-500 mt-1">✓</span>
                                <span>Trend analysis and rapid content deployment</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-purple-500 mt-1">✓</span>
                                <span>Data-driven editing techniques optimized for Instagram algorithm</span>
                            </li>
                        </ul>
                    </div>

                    <div className="flex items-center justify-between bg-purple-900/30 border border-purple-700/30 rounded-lg p-4">
                        <div>
                            <p className="text-2xl font-bold text-purple-400">+300K</p>
                            <p className="text-sm text-neutral-400">Net Growth</p>
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
