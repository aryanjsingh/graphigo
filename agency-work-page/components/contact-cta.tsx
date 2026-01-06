"use client"

import { useEffect, useRef } from "react"
import { ArrowUpRight, Mail, Instagram, Twitter } from "lucide-react"

export function ContactCTA() {
  const sectionRef = useRef<HTMLElement>(null)

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
    <section ref={sectionRef} id="contact" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-4 animate-on-scroll">
              Let's Create
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-on-scroll stagger-1">
              Ready to bring
              <br />
              your vision
              <br />
              to life?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 animate-on-scroll stagger-2">
              Whether you need a brand film, commercial, or photography - we're here to make it extraordinary.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-on-scroll stagger-3">
              <a
                href="mailto:hello@framecraft.studio"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-full transition-transform hover:scale-105 active:scale-95"
              >
                <Mail size={20} />
                Get in Touch
                <ArrowUpRight
                  size={20}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-3 px-8 py-4 border border-border hover:border-accent text-foreground font-semibold rounded-full transition-all duration-300 hover:bg-accent/10"
              >
                Schedule a Call
              </a>
            </div>
          </div>

          <div className="animate-on-scroll stagger-4">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-accent/10 rounded-full blur-[80px]" />

              <div className="relative bg-card rounded-2xl p-8 md:p-10 border border-border">
                <h3 className="text-2xl font-bold mb-6">Contact Info</h3>

                <div className="space-y-6">
                  <div>
                    <p className="text-muted-foreground text-sm mb-1">Email</p>
                    <a href="mailto:hello@framecraft.studio" className="text-lg hover:text-accent transition-colors">
                      hello@framecraft.studio
                    </a>
                  </div>

                  <div>
                    <p className="text-muted-foreground text-sm mb-1">Phone</p>
                    <a href="tel:+1234567890" className="text-lg hover:text-accent transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>

                  <div>
                    <p className="text-muted-foreground text-sm mb-1">Location</p>
                    <p className="text-lg">Los Angeles, CA</p>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-muted-foreground text-sm mb-3">Follow Us</p>
                    <div className="flex gap-4">
                      {[Instagram, Twitter].map((Icon, i) => (
                        <a
                          key={i}
                          href="#"
                          className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-accent hover:bg-accent/10 transition-all duration-300"
                        >
                          <Icon size={20} className="text-muted-foreground hover:text-accent" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 animate-on-scroll">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-sm">F</span>
            </div>
            <span className="font-bold">FRAMECRAFT</span>
          </div>
          <p className="text-muted-foreground text-sm">© 2026 Framecraft Studio. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}
