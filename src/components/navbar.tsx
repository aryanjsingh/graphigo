"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ContactModal } from "./contact-modal";
import { motion } from "framer-motion";

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            {/* Desktop Header */}
            <header className="absolute top-0 inset-x-0 z-[5000] w-full bg-transparent hidden md:block transition-all duration-300">
                <div className="max-w-[1400px] mx-auto px-10 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center">
                            <motion.img
                                initial={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                src="/logo.png"
                                alt="Graphigo"
                                className="h-16 w-auto object-contain"
                            />
                        </Link>

                        {/* Navigation Links */}
                        <nav className="flex items-center space-x-28">
                            {[
                                { href: "/", label: "Home", delay: 0.6 },
                                { href: "/works", label: "Work", delay: 0.7 },
                                { href: "/about", label: "About", delay: 0.8 },
                                { href: "/career", label: "Career", delay: 0.9 },
                            ].map((link) => (
                                <motion.div
                                    key={link.label}
                                    initial={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                                    transition={{ duration: 0.5, delay: link.delay }}
                                >
                                    <Link
                                        href={link.href}
                                        className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                            transition={{ duration: 0.5, delay: 1.0 }}
                        >
                            <ContactModal
                                triggerText=""
                                className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                            >
                                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_0%,#04D1CD_50%,#00000000_100%)]" />
                                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-background px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl italic tracking-wide">
                                    GET IN TOUCH
                                </span>
                            </ContactModal>
                        </motion.div>
                    </div>
                </div>
            </header>

            {/* Mobile Header */}
            <header className="absolute top-0 inset-x-0 z-[5000] w-full bg-background border-b border-border/10 md:hidden">
                <div className="px-4 py-3">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="flex items-center">
                            <img src="/logo.png" alt="Graphigo" className="h-7 w-auto" />
                        </Link>

                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="flex items-center justify-center w-10 h-10 rounded-lg transition-colors hover:bg-foreground/5"
                            aria-label="Toggle menu"
                        >
                            <div className="flex flex-col items-center justify-center w-5 h-5 space-y-1">
                                <span
                                    className={cn(
                                        "block w-4 h-0.5 bg-foreground transition-all duration-300",
                                        isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                                    )}
                                ></span>
                                <span
                                    className={cn(
                                        "block w-4 h-0.5 bg-foreground transition-all duration-300",
                                        isMobileMenuOpen ? "opacity-0" : ""
                                    )}
                                ></span>
                                <span
                                    className={cn(
                                        "block w-4 h-0.5 bg-foreground transition-all duration-300",
                                        isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                                    )}
                                ></span>
                            </div>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-[9998] bg-black/50 backdrop-blur-sm md:hidden" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="absolute top-16 left-4 right-4 bg-background border border-border/20 rounded-2xl shadow-2xl p-6" onClick={(e) => e.stopPropagation()}>
                        <nav className="flex flex-col space-y-4">
                            <Link
                                href="/"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block text-left px-4 py-3 text-base text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-foreground/5"
                            >
                                Home
                            </Link>
                            <Link
                                href="/works"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block text-left px-4 py-3 text-base text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-foreground/5"
                            >
                                Work
                            </Link>
                            <Link
                                href="/about"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block text-left px-4 py-3 text-base text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-foreground/5"
                            >
                                About
                            </Link>
                            <Link
                                href="/career"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block text-left px-4 py-3 text-base text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-foreground/5"
                            >
                                Career
                            </Link>
                            <div className="border-t border-border/20 pt-4 mt-4 w-full">
                                <ContactModal
                                    triggerText="GET IN TOUCH"
                                    className="block w-full px-4 py-3 text-sm font-medium text-center border border-foreground/20 text-foreground rounded-full hover:bg-foreground/10 transition-all"
                                />
                            </div>
                        </nav>
                    </div>
                </div>
            )}
        </>
    );
}
