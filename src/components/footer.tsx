import Link from "next/link"

export function Footer() {
    return (
        <footer className="relative w-full border-t border-white/10 bg-neutral-900/20 backdrop-blur-3xl pt-20 pb-10 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-16">
                    {/* Left Column: Brand & Newsletter */}
                    <div className="flex flex-col gap-8">
                        <div>
                            <Link href="/" className="inline-block mb-4">
                                <img src="/logo.png" alt="Graphigo" className="h-32 w-auto" />
                            </Link>
                            <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                                Strategic post-production that helps brands dominate digital spaces.
                                Built for positioning, distribution, and scalability.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Links Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                        {/* Navigate */}
                        <div className="flex flex-col gap-4">
                            <h3 className="font-semibold text-white">Navigate</h3>
                            <ul className="flex flex-col gap-3">
                                <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
                                <li><Link href="/works" className="text-muted-foreground hover:text-primary transition-colors">Work</Link></li>
                                <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
                                <li><Link href="/career" className="text-muted-foreground hover:text-primary transition-colors">Career</Link></li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="flex flex-col gap-4">
                            <h3 className="font-semibold text-white">Get in touch</h3>
                            <ul className="flex flex-col gap-3">
                                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Email</Link></li>
                                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Instagram</Link></li>
                                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">YouTube</Link></li>
                                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">LinkedIn</Link></li>
                            </ul>
                        </div>

                        {/* Legal/Useful */}
                        <div className="flex flex-col gap-4">
                            <h3 className="font-semibold text-white">Useful Links</h3>
                            <ul className="flex flex-col gap-3">
                                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
                                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
                                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Cookie Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} Graphigo. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <p className="text-sm text-muted-foreground">Crafted with passion</p>
                    </div>
                </div>
            </div>

            {/* Background Gradient Mesh */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] pointer-events-none" />
        </footer>
    )
}
