import Header from "@/components/Header"
import { DotPattern } from "@/registry/magicui/dot-pattern"
export default function LoginPage(){
    return(
        <>
                    <div className="flex min-h-screen flex-col items-center py-4 px-6">
                        <DotPattern
                                    glow
                                    className="[mask-image:radial-gradient(1280px_circle_at_center,white,transparent)]"
                                />
                        <Header />
                    </div>
            <p>Page de login</p>
        </>
    )
}