import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { DotPattern } from "@/registry/magicui/dot-pattern"
import SectionAuth from "@/components/SectionAuth"
export default function RegisterPage(){ 
    return (
        <>
            <div className="flex min-h-dvh flex-col items-center">
                <DotPattern
                    glow
                    className="[mask-image:radial-gradient(1280px_circle_at_center,white,transparent)]"
                />
                <Header />
                <SectionAuth titre_formulaire="Commence à apprendre ! " titre_btn="Démarrer" type_form="register"/>
                <Footer />
            </div>
        </>
    )
}