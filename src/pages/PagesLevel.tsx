import Header from "@/components/Header";
import { DotPattern } from "@/registry/magicui/dot-pattern";
import {useParams} from "react-router";

export default function PagesLevel(){
    const { level_id } = useParams<{ level_id: string }>();

    return(
                <div className="flex flex-col items-center">
                    <DotPattern
                        glow
                        className="[mask-image:radial-gradient(1280px_circle_at_center,white,transparent)]"
                    />
                    <Header afficherMenuProfil={true} />
                    <main className="flex mt-18 w-full flex-col items-center px-4 py-16">
                        <p>Niveau : {level_id}</p>
                    </main>
                </div>
    )
}