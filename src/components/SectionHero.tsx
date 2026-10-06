"use client"

// import { useEffect, useRef, useState } from "react"
// import Text3DFlip from "@/registry/magicui/text-3d-flip"
import { ArrowRight, Download,ChevronDown } from "lucide-react"
import {  } from "lucide-react";


import networkIllustration from "@/assets/thinking_face_animated.png"

// const ROTATING_WORDS = [
//     "en jouant",
//     "en t’amusant",
//     "en explorant",
//     "en progressant",
// ]

// const WORD_INTERVAL = 2600

// function RotatingWords() {
//     const [index, setIndex] = useState(0)
//     const containerRef = useRef<HTMLDivElement>(null)

//     useEffect(() => {
//         const timer = window.setInterval(() => {
//             setIndex((current) => (current + 1) % ROTATING_WORDS.length)
//         }, WORD_INTERVAL)

//         return () => window.clearInterval(timer)
//     }, [])

//     useEffect(() => {
//         const char = containerRef.current?.querySelector<HTMLElement>(".text-3d-flip-char")
//         if (!char) return

//         char.dispatchEvent(new MouseEvent("mouseover", { bubbles: true }))
//         const reset = window.setTimeout(() => {
//             char.dispatchEvent(new MouseEvent("mouseout", { bubbles: true, relatedTarget: document.body }))
//         }, 120)

//         return () => window.clearTimeout(reset)
//     }, [index])

//     return (
//         <div ref={containerRef} className="[perspective:1200px]">
//             <Text3DFlip
//                 as="span"
//                 className="font-serif text-xl font-bold sm:text-5xl"
//                 textClassName="text-primary"
//                 flipTextClassName="text-secondary"
//                 rotateDirection="top"
//                 staggerDuration={0.03}
//                 staggerFrom="first"
//                 transition={{ type: "spring", damping: 25, stiffness: 160 }}
//             >
//                 {ROTATING_WORDS[index]}
//             </Text3DFlip>
//         </div>
//     )
// }

export default function SectionHero() {
    return (
        <section className="relative w-full overflow-hidden mt-18">
            <div className="mx-auto w-full flex flex-col justify-center max-w-6xl items-center py-16 lg:gap-8">
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


    )
}