"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleMobileNavClick = (elementId: string) => {
        setIsMobileMenuOpen(false);
        setTimeout(() => {
            const element = document.getElementById(elementId);
            if (element) {
                const headerOffset = 120;
                const elementPosition =
                    element.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                });
            }
        }, 100);
    };

    const handleNavClick = (e: React.MouseEvent, elementId: string) => {
        e.preventDefault();
        const element = document.getElementById(elementId);
        if (element) {
            const headerOffset = 120;
            const elementPosition =
                element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    return (
        <>
            {/* Desktop Header */}
            <header
                className={cn(
                    "fixed top-4 inset-x-0 z-[5000] mx-auto hidden md:flex w-full flex-row items-center justify-between self-start rounded-full bg-background/80 backdrop-blur-sm border border-border/50 shadow-lg transition-all duration-300 py-2",
                    isScrolled ? "max-w-2xl px-3" : "max-w-4xl px-6"
                )}
                style={{
                    willChange: "transform",
                    transform: "translateZ(0)",
                    backfaceVisibility: "hidden",
                    perspective: "1000px",
                }}
            >
                <Link
                    className={cn(
                        "z-50 flex items-center justify-center gap-2 transition-all duration-300",
                        isScrolled ? "ml-4" : ""
                    )}
                    href="/"
                >
                    <span className=" text-xl tracking-tight font-bold italic text-foreground">Graphigo</span>
                </Link>

                <div className="absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-muted-foreground transition duration-200 hover:text-foreground md:flex md:space-x-2">
                    <Link
                        href="/"
                        className="relative px-4 py-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                    >
                        <span className="relative z-20">Home</span>
                    </Link>
                    <Link
                        href="/works"
                        className="relative px-4 py-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                    >
                        <span className="relative z-20">Works</span>
                    </Link>
                    <Link
                        href="/about"
                        className="relative px-4 py-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                    >
                        <span className="relative z-20">About Us</span>
                    </Link>

                </div>

                <div className="flex items-center">
                    <Link
                        href="/contact"
                        className="rounded-full font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center bg-gradient-to-b from-primary to-primary/80 text-primary-foreground shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] px-6 py-2 text-sm"
                    >
                        Contact Us
                    </Link>
                </div>
            </header>

            {/* Mobile Header */}
            <header className="fixed top-4 inset-x-0 z-[5000] mx-4 flex w-auto flex-row items-center justify-between rounded-full bg-background/80 backdrop-blur-sm border border-border/50 shadow-lg md:hidden px-4 py-3">
                <Link
                    className="flex items-center justify-center gap-2"
                    href="/"
                >
                    <span className="font-bold text-lg tracking-tight text-foreground font-bold italic">Graphigo</span>
                </Link>

                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-background/50 border border-border/50 transition-colors hover:bg-background/80"
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
            </header>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-[9998] bg-black/50 backdrop-blur-sm md:hidden">
                    <div className="absolute top-20 left-4 right-4 bg-background/95 backdrop-blur-md border border-border/50 rounded-2xl shadow-2xl p-6">
                        <nav className="flex flex-col space-y-4">
                            <Link
                                href="/"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block text-left px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50"
                            >
                                Home
                            </Link>
                            <Link
                                href="/works"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block text-left px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50"
                            >
                                Works
                            </Link>
                            <Link
                                href="/about"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block text-left px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50"
                            >
                                About Us
                            </Link>
                            <div className="border-t border-border/50 pt-4 mt-4">
                                <Link
                                    href="/contact"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block w-full px-4 py-3 text-lg font-bold text-center bg-gradient-to-b from-primary to-primary/80 text-primary-foreground rounded-full shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </nav>
                    </div>
                </div>
            )}
        </>
    );
}
