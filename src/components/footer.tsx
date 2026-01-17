import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Footer() {
    return (
        <footer className="relative pt-20 pb-8 overflow-hidden bg-primary text-primary-foreground">
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `linear-gradient(to bottom, 
            transparent 0%, 
            rgba(0, 0, 0, 0.2) 100%
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

                <div className="flex justify-center pb-12">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-center sm:text-left">
                        {/* Navigate Column */}
                        <div>
                            <h3 className="text-primary-foreground font-semibold text-lg mb-6">Navigate</h3>
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
                                    <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                                        Creators
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                                        FAQs
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Get in touch Column */}
                        <div>
                            <h3 className="text-primary-foreground font-semibold text-lg mb-6">Get in touch</h3>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                                        Email
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                                        Instagram
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                                        Youtube
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                                        LinkedIn
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Useful Links Column */}
                        <div>
                            <h3 className="text-primary-foreground font-semibold text-lg mb-6">Useful Links</h3>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                                        Terms & Conditions
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                                        Refund & Cancellation
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-primary-foreground/20">
                    <p className="text-primary-foreground/70 text-sm">©Graphigo 2025. All rights reserved</p>
                    <p className="text-primary-foreground/70 text-sm">Crafted with passion</p>
                </div>
            </div>
        </footer>
    )
}
