import Header from "../components/Header"
import SectionHero from "../components/SectionHero"
import { DotPattern } from "@/registry/magicui/dot-pattern"
export default function LandingPage() {
    return(
        <div className="flex h-dvh min-h-[36rem] flex-col items-center">
            <DotPattern
                        glow
                        className="[mask-image:radial-gradient(1280px_circle_at_center,white,transparent)]"
                    />
            <Header />
            <SectionHero />
        </div>
    )
}