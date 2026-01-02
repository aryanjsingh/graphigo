import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Footer() {
    return (
        <footer className="relative pt-20 pb-8 overflow-hidden bg-neutral-950">
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `linear-gradient(to bottom, 
            transparent 0%, 
            transparent 10%,
            rgba(0, 222, 222, 0.05) 25%,
            rgba(0, 222, 222, 0.15) 50%,
            rgba(0, 222, 222, 0.3) 75%,
            rgba(0, 222, 222, 0.5) 90%,
            rgba(0, 222, 222, 0.6) 100%
          )`,
                }}
            />

            <div
                className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
                style={{
                    background: `linear-gradient(to top, 
            rgba(0, 222, 222, 0.02) 0%,
            transparent 100%
          )`,
                }}
            />

            <div className="relative mx-auto max-w-7xl px-6">
                <div className="flex justify-center mb-16">
                    <div className="text-center">

                        <span
                            className="text-white text-7xl md:text-8xl lg:text-9xl font-bold italic"
                            style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
                        >
                            Graphigo
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 pb-12">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
                        {/* Navigate Column */}
                        <div>
                            <h3 className="text-white font-semibold text-lg mb-6">Navigate</h3>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                        Work
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                        Creators
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                        FAQs
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Get in touch Column */}
                        <div>
                            <h3 className="text-white font-semibold text-lg mb-6">Get in touch</h3>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                        Email
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                        Instagram
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                        Youtube
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                        LinkedIn
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Useful Links Column */}
                        <div>
                            <h3 className="text-white font-semibold text-lg mb-6">Useful Links</h3>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                        Terms & Conditions
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                        Refund & Cancellation
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 max-w-md">
                        <h3 className="text-white text-2xl font-semibold mb-4">Are you a creator?</h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Think you have what it takes to be a part of our community? Join Graphigo and
                            we&apos;ll help you create content that converts and captivates!
                        </p>
                        <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full">
                            Join the team!
                        </Button>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-gray-800">
                    <p className="text-gray-400 text-sm">©Graphigo 2025. All rights reserved</p>
                    <p className="text-gray-400 text-sm">Crafted with passion</p>
                </div>
            </div>
        </footer>
    )
}
