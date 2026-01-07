import { AboutHeader } from "@/components/about-header"
import { VisionarySection } from "@/components/visionary-section"
import { TeamGrid } from "@/components/team-grid"
import { Footer } from "@/components/footer"

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-[128px] dark:bg-purple-900/10"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00E0C6]/10 rounded-full blur-[128px]"></div>
            </div>

            <div className="relative z-10">
                <AboutHeader />
                <VisionarySection />
                <TeamGrid />
            </div>

            <Footer />
        </main>
    )
}
