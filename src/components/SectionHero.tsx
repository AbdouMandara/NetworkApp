"use client"
import { ArrowRight, Download } from "lucide-react"
import {Link} from 'react-router'
import Footer from "./Footer"

export default function SectionHero() {
    return (
        <>
            <section id="commencer" className="flex min-h-0 w-full flex-1 items-center justify-center px-6 pt-20 pb-8 text-center text-base-content">
                <div className="mx-auto flex w-full max-w-4xl flex-col items-center">
                    <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-5xl">
                        Sur NetworkApp, t’es au bon endroit.
                    </h1>
                    <p className="mt-3 max-w-2xl text-base leading-7 text-base-content/70 sm:mt-5">
                        Découvre des concepts utiles en réseaux et comprends les tout en amusant et en pratiquant.
                    </p>
                    <div className="mt-5 flex flex-col items-center gap-3 sm:mt-8 sm:flex-row">
                        <Link to="/login" className="btn btn-primary">
                            Commencer maintenant
                            <ArrowRight aria-hidden="true" className="size-4" />
                        </Link>
                        <button
                            type="button"
                            disabled
                            title="Le lien de téléchargement sera ajouté prochainement"
                            className="btn btn-outline border-base-content/30 text-base-content opacity-60"
                        >
                            Télécharger l’app
                            <Download aria-hidden="true" className="size-4" />
                        </button>
                    </div>
                </div>
            </section>
            <Footer />
        </>
        

    )
}