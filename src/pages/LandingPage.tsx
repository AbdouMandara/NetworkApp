import Header from "../components/Header"
import SectionHero from "../components/SectionHero"
export default function LandingPage() {
    return(
        <div className="flex flex-col items-center h-screen py-4 px-6">
            <Header isLandingPage={true} />
            <SectionHero />
        </div>
    )
}