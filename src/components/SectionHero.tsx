"use client"
import { ArrowRight, Download } from "lucide-react"
import {Link} from 'react-router'

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
            <footer className="mt-auto w-full bg-neutral px-6 text-neutral-content">
                <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 py-3 sm:flex-row sm:gap-5 sm:py-4">
                    <p className="text-sm">Fait par <strong>Abdou Mandara</strong></p>
                    <nav aria-label="Réseaux sociaux" className="flex items-center gap-2">
                        <a href="https://github.com/AbdouMandara" target="_blank" rel="noopener noreferrer" title="GitHub" aria-label="GitHub" className="rounded p-2 transition-colors hover:bg-white/10">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                            </svg>
                        </a>
                        <a href="https://linkedin.com/in/abdou-mandara" target="_blank" rel="noopener noreferrer" title="LinkedIn" aria-label="LinkedIn" className="rounded p-2 transition-colors hover:bg-white/10">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                                <circle cx="4" cy="4" r="2" />
                            </svg>
                        </a>
                        <a href="https://tiktok.com/@its_abdou_mandara" target="_blank" rel="noopener noreferrer" title="TikTok" aria-label="TikTok" className="rounded p-2 transition-colors hover:bg-white/10">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                            </svg>
                        </a>
                        <a href="https://instagram.com/abdou_mandara" target="_blank" rel="noopener noreferrer" title="Instagram" aria-label="Instagram" className="rounded p-2 transition-colors hover:bg-white/10">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                <circle cx="17.5" cy="6.5" r="1.5" />
                            </svg>
                        </a>
                    </nav>
                </div>
            </footer>
        </>
        

    )
}