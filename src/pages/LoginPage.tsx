import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { DotPattern } from "@/registry/magicui/dot-pattern"
import SectionAuth from "@/components/SectionAuth"
import useRedirectDashboard from "@/hooks/redirectDashboard"
import { useEffect } from "react"

export default function LoginPage(){ 
    const redirect = useRedirectDashboard();
    
    useEffect(() => {
        if (redirect) {
            redirect();
        }
    }, [redirect]);
    return (
        <>
            <div className="flex min-h-dvh flex-col items-center">
                <DotPattern
                    glow
                    className="[mask-image:radial-gradient(1280px_circle_at_center,white,transparent)]"
                />
                <Header afficherMenuProfil={false} />
                <SectionAuth titre_formulaire="Continue d'apprendre ! " titre_btn="Se connecter" type_form="login"/>
                <Footer />
            </div>
        </>
    )
}