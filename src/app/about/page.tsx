"use client"

import { useEffect, useRef } from "react"
import { ArrowUpRight } from "lucide-react"

export default function AboutPage() {
    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible")
                    }
                })
            },
            { threshold: 0.1 },
        )

        const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
        elements?.forEach((el) => observer.observe(el))

        return () => observer.disconnect()
    }, [])

    return (
        <main ref={sectionRef} className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden px-6 py-32">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/30 rounded-full blur-[150px] animate-pulse-glow" />
                        <div
                            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-[120px] animate-pulse-glow"
                            style={{ animationDelay: "1.5s" }}
                        />
                    </div>
                </div>

                <div className="relative z-10 text-center max-w-4xl mx-auto">
                    <div className="animate-on-scroll">
                        <p className="text-accent font-medium tracking-[0.3em] uppercase text-sm mb-6">About Graphigo</p>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
                            Creating Content
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-accent to-foreground">
                                That Converts
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            We transform brands through powerful visual storytelling, crafting content that doesn't just look
                            good—it drives results.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-24 md:py-32 px-6 border-t border-border">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
                        <div className="animate-on-scroll">
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-card">
                                <img
                                    src="/placeholder.svg"
                                    alt="Graphigo Studio"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="animate-on-scroll stagger-1">
                            <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-4">Our Mission</p>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Elevating Brands Through Visual Excellence
                            </h2>
                            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                                At Graphigo, we believe that great content is the intersection of creativity and strategy. We
                                don't just create videos—we craft experiences that resonate with audiences and drive measurable
                                business outcomes.
                            </p>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                From long-form brand documentaries to scroll-stopping social media content, we bring a cinematic
                                approach to every project, ensuring your brand stands out in a crowded digital landscape.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Founder Section */}
            <section className="py-24 md:py-32 px-6 bg-card/30">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 animate-on-scroll">
                        <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-4">Leadership</p>
                        <h2 className="text-4xl md:text-6xl font-bold">Meet the Founder</h2>
                    </div>

                    <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-center">
                        <div className="md:col-span-2 animate-on-scroll stagger-1">
                            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-card">
                                <img
                                    src="/placeholder.svg"
                                    alt="Founder"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="md:col-span-3 animate-on-scroll stagger-2">
                            <h3 className="text-3xl md:text-4xl font-bold mb-2">John Doe</h3>
                            <p className="text-accent text-lg mb-6">Founder & Creative Director</p>

                            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-8">
                                <p>
                                    With over a decade of experience in visual storytelling, John founded Graphigo with a simple
                                    vision: to help brands cut through the noise with content that truly matters.
                                </p>
                                <p>
                                    His work has been featured in campaigns for Fortune 500 companies, earning multiple industry
                                    awards and driving millions in revenue for clients. But beyond the accolades, John's passion
                                    lies in the craft—in finding that perfect frame, that compelling narrative, that moment of
                                    connection between brand and audience.
                                </p>
                                <p>
                                    When he's not behind the camera or in the editing suite, you'll find John mentoring the next
                                    generation of content creators and pushing the boundaries of what's possible in digital
                                    storytelling.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="#"
                                    className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
                                >
                                    LinkedIn
                                    <ArrowUpRight size={16} />
                                </a>
                                <a
                                    href="#"
                                    className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
                                >
                                    Instagram
                                    <ArrowUpRight size={16} />
                                </a>
                                <a
                                    href="#"
                                    className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
                                >
                                    Twitter
                                    <ArrowUpRight size={16} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 md:py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 animate-on-scroll">
                        <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-4">Our Values</p>
                        <h2 className="text-4xl md:text-6xl font-bold">What Drives Us</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Creative Excellence",
                                description:
                                    "We push creative boundaries while maintaining the highest production standards. Every frame matters.",
                            },
                            {
                                title: "Strategic Impact",
                                description:
                                    "Beautiful content is just the start. We create with purpose, ensuring every piece drives real business results.",
                            },
                            {
                                title: "Authentic Storytelling",
                                description:
                                    "We believe in honest, compelling narratives that resonate with audiences and build lasting brand connections.",
                            },
                        ].map((value, i) => (
                            <div
                                key={value.title}
                                className="animate-on-scroll p-8 rounded-2xl bg-card border border-border hover:border-accent transition-colors duration-300"
                                style={{ transitionDelay: `${i * 0.1}s` }}
                            >
                                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Studio Photos Section */}
            <section className="py-24 md:py-32 px-6 bg-card/30">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 animate-on-scroll">
                        <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-4">Behind the Scenes</p>
                        <h2 className="text-4xl md:text-6xl font-bold">Our Studio</h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                            <div
                                key={i}
                                className="animate-on-scroll aspect-square rounded-xl overflow-hidden bg-card group cursor-pointer"
                                style={{ transitionDelay: `${i * 0.05}s` }}
                            >
                                <img
                                    src="/placeholder.svg"
                                    alt={`Studio ${i}`}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 md:py-32 px-6">
                <div className="max-w-4xl mx-auto text-center animate-on-scroll">
                    <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to Create Something Amazing?</h2>
                    <p className="text-xl text-muted-foreground mb-12">
                        Let's bring your vision to life with content that captivates and converts.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-full transition-transform hover:scale-105 active:scale-95"
                        >
                            Get in Touch
                            <ArrowUpRight size={20} />
                        </a>
                        <a
                            href="/works"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border hover:border-accent text-foreground font-semibold rounded-full transition-all duration-300 hover:bg-accent/10"
                        >
                            View Our Work
                        </a>
                    </div>
                </div>
            </section>
        </main>
    )
}
