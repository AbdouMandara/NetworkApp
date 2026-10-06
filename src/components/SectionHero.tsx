"use client"
import { ChevronDown } from "lucide-react"
import networkIllustration from "@/assets/thinking_face_animated.png"

export default function SectionHero() {
    return (
        <>
            <section className="sticky top-[5.5rem] z-0 mt-18 mb-30 w-full overflow-hidden">
                <div className="mx-auto w-full flex flex-col justify-center max-w-6xl items-center pt-16">
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                        <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                            Tu découvres le réseau et t'es perdu ?
                        </h1>
                    </div>

                    <div className="relative isolate">
                        <img
                            src={networkIllustration}
                            alt="Illustration d'un échange de données entre deux machines"
                            className="relative h-[200px] "
                        />
                    </div>
                    <div className="flex flex-col items-center gap-4 mt-20 text-gray-600">
                        <p>Scroll pour voir plus</p>
                        <ChevronDown className="size-6 animate-bounce" />
                    </div>
                </div>
            </section>
            <section className="relative z-10 min-h-[140vh] w-full bg-primary text-white">
                <div className="sticky top-0 flex min-h-screen w-full items-center px-6 py-10 text-white">
                    <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
                        <div>
                            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-white/70">
                                NetworkApp · les bases du réseau
                            </p>
                            <h2 className="max-w-xl text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                                Comprendre ce qui se passe entre tes appareils.
                            </h2>
                            <p className="mt-5 max-w-lg text-base leading-7 text-white/80">
                                Découvre les notions essentielles et suis le chemin des données, étape par étape.
                            </p>
                        </div>

                        <div className="divide-y divide-white/20 border-y border-white/20">
                            <article className="grid grid-cols-[2.5rem_1fr] gap-4 py-5">
                                <span className="text-sm font-semibold text-white/60">01</span>
                                <div>
                                    <h3 className="font-semibold">Les fondamentaux</h3>
                                    <p className="mt-1 text-sm leading-6 text-white/75">
                                        Adresses IP, DNS et ports : les repères pour comprendre un réseau.
                                    </p>
                                </div>
                            </article>
                            <article className="grid grid-cols-[2.5rem_1fr] gap-4 py-5">
                                <span className="text-sm font-semibold text-white/60">02</span>
                                <div>
                                    <h3 className="font-semibold">Les échanges</h3>
                                    <p className="mt-1 text-sm leading-6 text-white/75">
                                        Le rôle du client et du serveur dans chaque communication.
                                    </p>
                                </div>
                            </article>
                            <article className="grid grid-cols-[2.5rem_1fr] gap-4 py-5">
                                <span className="text-sm font-semibold text-white/60">03</span>
                                <div>
                                    <h3 className="font-semibold">Le parcours des données</h3>
                                    <p className="mt-1 text-sm leading-6 text-white/75">
                                        Suis une requête depuis ton appareil jusqu’à sa destination.
                                    </p>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        </>
        

    )
}