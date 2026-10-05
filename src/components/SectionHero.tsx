"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, Download } from "lucide-react"

import networkIllustration from "@/assets/undraw_ask-online_8zdn.svg"
import { DotPattern } from "@/registry/magicui/dot-pattern"
import Text3DFlip from "@/registry/magicui/text-3d-flip"

const ROTATING_WORDS = [
    "en jouant",
    "en t’amusant",
    "en explorant",
    "en progressant",
]

const WORD_INTERVAL = 2600

function RotatingWords() {
    const [index, setIndex] = useState(0)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const timer = window.setInterval(() => {
            setIndex((current) => (current + 1) % ROTATING_WORDS.length)
        }, WORD_INTERVAL)

        return () => window.clearInterval(timer)
    }, [])

    useEffect(() => {
        const char = containerRef.current?.querySelector<HTMLElement>(".text-3d-flip-char")
        if (!char) return

        char.dispatchEvent(new MouseEvent("mouseover", { bubbles: true }))
        const reset = window.setTimeout(() => {
            char.dispatchEvent(new MouseEvent("mouseout", { bubbles: true, relatedTarget: document.body }))
        }, 120)

        return () => window.clearTimeout(reset)
    }, [index])

    return (
        <div ref={containerRef} className="[perspective:1200px]">
            <Text3DFlip
                as="span"
                className="font-serif text-xl font-bold sm:text-5xl"
                textClassName="text-primary"
                flipTextClassName="text-secondary"
                rotateDirection="top"
                staggerDuration={0.03}
                staggerFrom="first"
                transition={{ type: "spring", damping: 25, stiffness: 160 }}
            >
                {ROTATING_WORDS[index]}
            </Text3DFlip>
        </div>
    )
}

export default function SectionHero() {
    return (
        <section className="relative w-full overflow-hidden">
            <div className="mx-auto grid w-full max-w-6xl items-center gap-8 px-2 py-8 lg:grid-cols-2 lg:gap-12">
                    <DotPattern
                        glow
                        className="[mask-image:radial-gradient(280px_circle_at_center,white,transparent)]"
                    />
                <div className="relative isolate">
                    <img
                        src={networkIllustration}
                        alt="Illustration d'un échange de données entre deux machines"
                        className="relative h-[240px] w-full sm:h-[300px]"
                    />
                </div>

                <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">

                    <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                        Tu veux apprendre le réseau ?
                    </h1>

                    <RotatingWords />


                    <div className="mt-1 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                        <a href="/telechargement" className="btn btn-primary btn-lg shadow-lg ">
                            <Download className="size-5" aria-hidden="true" />
                            Télécharger l'application
                        </a>
                        <a href="/inscription" className="btn btn-outline btn-lg">
                            Commencer
                            <ArrowRight className="size-5" aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}