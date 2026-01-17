"use client"

import { Globe, Mail } from "lucide-react"

export function VisionarySection() {
    return (
        <section className="mb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">
                    The <span className="text-[#00E0C6]">Visionary</span>
                </h2>
                <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
                    Leading with passion and creativity, setting the standard for digital excellence.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-start max-w-5xl mx-auto">
                <div className="lg:col-span-1 hidden lg:block text-right self-center">
                    <h3 className="text-4xl font-serif font-bold mb-2">
                        Bhavik <br /> Dattani
                    </h3>
                    <p className="text-[#00E0C6] text-sm tracking-widest uppercase font-semibold mb-6">
                        Founder & CEO
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                        "We don't just edit videos; we engineer emotions. Every frame is a chance to connect, every cut a beat in the story of your brand."
                    </p>
                    <div className="mt-8 flex justify-end gap-4">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <Globe size={20} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>
                <div className="relative group mx-auto w-full max-w-sm lg:max-w-none">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#00E0C6] to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative aspect-[9/16] bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
                        <img
                            alt="Founder Portrait"
                            className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                            src="/bhavik.jpg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                        <div className="absolute bottom-6 left-6 lg:hidden">
                            <h3 className="text-2xl font-bold text-white">Bhavik Dattani</h3>
                            <p className="text-[#00E0C6] text-sm font-medium">Founder & CEO</p>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-1 flex flex-col gap-6 pt-12 lg:pt-0">
                    <div className="relative group w-full max-w-sm mx-auto lg:mx-0">
                        <div className="aspect-[4/5] bg-gray-900 rounded-xl overflow-hidden shadow-xl border border-white/5">
                            <img
                                alt="Founder Working"
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsrdnuy5uYPsSNUMcVXIn_FS_avINKM7GV2zGsqo1_f5oC21rk0Evo1UlXI6MzQgR1g6U8SL0ERWPeSG4DIeSLzZrwVapnXt1-ojVYgsCOy8eMWt6jkCwSfM7cTV_s2hNdv-Tv6SJY2pvdicWcDj5LaBwGNOCSuO-7_8E2LOVuZ7h22aRMxEsvnuixn2WwmoxE2Ey1jqnsFfqKgL24Yp_BNQriu_3vwT3e83A57XbguTbN_pa4DpOnCAzXW04seET9lba0oVFyGsA"
                            />
                        </div>
                        <p className="mt-3 text-xs text-gray-500 italic text-center lg:text-left">
                            Behind the scenes: Strategy session
                        </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-[#0f0f0f] p-6 rounded-xl border border-gray-200 dark:border-white/5">
                        <h4 className="font-bold text-lg mb-2">Our Philosophy</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Content isn't just king; it's the kingdom. We build empires one pixel at a time, ensuring that quality never takes a backseat to quantity.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
