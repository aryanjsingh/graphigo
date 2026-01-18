"use client"

export function GraphigoFeatures() {
    const features = [
        {
            icon: (
                <svg className="w-12 h-12 mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="3" width="8" height="8" />
                    <rect x="13" y="3" width="8" height="8" />
                    <rect x="3" y="13" width="8" height="8" />
                    <circle cx="17" cy="17" r="4" />
                </svg>
            ),
            title: "Quality Checks",
            description: "Every video is handled by a pro before it reaches you. Flawless every time.",
        },
        {
            icon: (
                <svg className="w-12 h-12 mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                </svg>
            ),
            title: "Lightning Fast Delivery",
            description: "Your professionally edited video is ready within 48 hours - No Delays, No Drama.",
        },
        {
            icon: (
                <svg className="w-12 h-12 mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M7 16.5L3.5 13m0 0L2 14.5m1.5-1.5l2.5 2.5" />
                    <path d="M17 7.5L20.5 11m0 0L22 9.5m-1.5 1.5l-2.5-2.5" />
                </svg>
            ),
            title: "Simple, Flat Pricing",
            description: "No hidden fees, no surprises just clear, predictable pricing that works for you.",
        },
        {
            icon: (
                <svg className="w-12 h-12 mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2L15 10H23L17 15L19 23L12 18L5 23L7 15L1 10H9L12 2Z" />
                    <circle cx="12" cy="11" r="3" fill="currentColor" />
                </svg>
            ),
            title: "Built by Creators",
            description: "Created by creators who get it, so you never have to over-explain your vision.",
        },
        {
            icon: (
                <svg className="w-12 h-12 mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 12C3 7.03 7.03 3 12 3s9 4.03 9 9-4.03 9-9 9-9-4.03-9-9z" />
                    <line x1="12" y1="8" x2="12" y2="16" />
                    <line x1="8" y1="12" x2="16" y2="12" />
                </svg>
            ),
            title: "Compatible Formats",
            description: "We deliver in the exact specs you need for Instagram, YouTube, TikTok, and more.",
        },
        {
            icon: (
                <svg className="w-12 h-12 mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="9" />
                    <circle cx="9" cy="10" r="1.5" fill="currentColor" />
                    <circle cx="15" cy="10" r="1.5" fill="currentColor" />
                    <path d="M8 14c1 1 2 2 4 2s3-1 4-2" />
                </svg>
            ),
            title: "True to You",
            description:
                "We tailor each edit to match your unique style and voice because your content should feel like you.",
        },
    ]

    return (
        <section className="py-20 px-4 bg-background">
            <div className="max-w-6xl mx-auto border border-white/10 bg-neutral-900/10 backdrop-blur-3xl rounded-3xl p-12 shadow-2xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-sm text-gray-400 mb-4 tracking-wide">Features</p>
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                        Reasons <span className="italic font-light">Creators and Brands</span> Choose Graphigo
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Once you try Graphigo, you'll never go anywhere else for content creation. Seriously.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {features.map((feature, index) => (
                        <div key={index} className="text-center">
                            <div className="text-primary">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="flex justify-center">
                    <button className="px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all duration-200">
                        Book a 15-min call
                    </button>
                </div>
            </div>
        </section>
    )
}
