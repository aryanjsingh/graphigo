"use client"

const clients = ["NETFLIX", "APPLE", "NIKE", "SPOTIFY", "ADOBE", "GOOGLE", "META", "AMAZON", "DISNEY", "SONY"]

export function ClientsMarquee() {
  return (
    <section className="py-12 border-y border-border bg-card/50 overflow-hidden">
      <div className="flex items-center gap-8">
        <p className="text-muted-foreground text-sm tracking-widest uppercase whitespace-nowrap px-6">Trusted by</p>
        <div className="relative flex overflow-hidden">
          <div className="animate-marquee flex items-center gap-16 pr-16">
            {[...clients, ...clients].map((client, i) => (
              <span
                key={`${client}-${i}`}
                className="text-2xl md:text-3xl font-bold text-muted-foreground/40 hover:text-foreground transition-colors duration-500 whitespace-nowrap cursor-default"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
