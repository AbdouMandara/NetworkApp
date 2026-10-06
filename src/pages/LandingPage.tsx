import Header from "../components/Header"
import SectionHero from "../components/SectionHero"
import { DotPattern } from "@/registry/magicui/dot-pattern"
export default function LandingPage() {
    return(
        <div className="flex flex-col items-center h-screen py-4 px-6">
            <DotPattern
                        glow
                        className="[mask-image:radial-gradient(1280px_circle_at_center,white,transparent)]"
                    />
            <Header isLandingPage={true} />
            <SectionHero />
        </div>
    )
}