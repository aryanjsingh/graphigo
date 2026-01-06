import { HeroSection } from "@/components/hero-section"
import { ClientsMarquee } from "@/components/clients-marquee"
import { FeaturedProjects } from "@/components/featured-projects"
import { WorkShowcase } from "@/components/work-showcase"
import { VideoReel } from "@/components/video-reel"
import { StatsSection } from "@/components/stats-section"
import { ContactCTA } from "@/components/contact-cta"

export default function WorksPage() {
    return (
        <main className="min-h-screen bg-background overflow-x-hidden">
            <HeroSection />
            <ClientsMarquee />
            <FeaturedProjects />
            <VideoReel />
            <WorkShowcase />
            <StatsSection />
            <ContactCTA />
        </main>
    );
}

