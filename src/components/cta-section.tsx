import React from "react";
import Image from "next/image";

export default function CTASection() {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Doodle Elements - Scattered across the section */}
            <div className="absolute top-16 right-[15%] w-16 h-16 opacity-80 hidden lg:block z-20">
                <Image
                    src="/doodle-share.png"
                    alt=""
                    width={64}
                    height={64}
                    className="object-contain"
                />
            </div>
            <div className="absolute bottom-32 left-[10%] w-20 h-20 opacity-80 hidden lg:block z-20">
                <Image
                    src="/doodle-arrow.png"
                    alt=""
                    width={80}
                    height={80}
                    className="object-contain"
                />
            </div>
            <div className="absolute top-[25%] left-[8%] w-12 h-12 opacity-70 hidden lg:block z-20">
                <Image
                    src="/doodle-slash.png"
                    alt=""
                    width={48}
                    height={48}
                    className="object-contain"
                />
            </div>
            <div className="absolute bottom-[20%] right-[12%] w-14 h-14 opacity-70 hidden lg:block rotate-12 z-20">
                <Image
                    src="/doodle-star.png"
                    alt=""
                    width={56}
                    height={56}
                    className="object-contain"
                />
            </div>
            <div className="absolute top-[40%] right-[8%] w-10 h-10 opacity-60 hidden xl:block rotate-45 z-20">
                <Image
                    src="/doodle-slash.png"
                    alt=""
                    width={40}
                    height={40}
                    className="object-contain"
                />
            </div>

            <div className="max-w-7xl mx-auto px-6">
                {/* CTA Card */}
                <div className="relative bg-[#2a2a2a] rounded-3xl p-12 md:p-16 overflow-hidden z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                        {/* Left Content */}
                        <div>
                            <h2 className="text-4xl md:text-5xl font-road-rage text-white mb-6 leading-tight transform -rotate-1">
                                CREATE YOUR ACCOUNT TODAY AND{" "}
                                <span className="relative inline-block">
                                    GET STARTED
                                    <span className="absolute bottom-0 left-0 w-full h-2 bg-primary -rotate-1"></span>
                                </span>{" "}
                                FOR FREE!
                            </h2>
                            <p className="text-gray-400 mb-8 text-sm leading-relaxed">
                                Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
                                semper at ac tempus enim.
                            </p>
                            <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-100 transition-all flex items-center gap-2 group">
                                SEND A MESSAGE
                                <svg
                                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M5 3l14 9-14 9V3z" />
                                </svg>
                            </button>
                        </div>

                        {/* Right Content - Login Form Illustration */}
                        <div className="hidden md:flex justify-center items-center">
                            <div className="relative w-full max-w-sm">
                                {/* Form Card Illustration */}
                                <div className="bg-white rounded-2xl p-8 shadow-2xl transform rotate-3">
                                    <div className="flex justify-center mb-6">
                                        <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                                            <svg
                                                className="w-10 h-10 text-white"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="h-3 bg-gray-200 rounded w-full"></div>
                                        <div className="h-3 bg-gray-200 rounded w-full"></div>
                                        <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                                        <div className="h-10 bg-primary rounded-full mt-6"></div>
                                    </div>
                                </div>
                                {/* Background blob */}
                                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gray-600 rounded-full blur-3xl opacity-30"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
