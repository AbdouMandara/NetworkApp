import { useState } from "react";
import { Play } from "lucide-react";
import Header from "@/components/Header";
import { DotPattern } from "@/registry/magicui/dot-pattern";

const difficultes = [
    { id: "facile", label: "Facile", description: "Pour découvrir les bases en douceur." },
    { id: "moyen", label: "Moyen", description: "Un bon équilibre entre fun et challenge." },
    { id: "difficile", label: "Difficile", description: "Pour les experts qui n'ont pas froid aux yeux." },
] as const;

type Difficulte = (typeof difficultes)[number]["id"];

export default function QuizzPage() {
    const [difficulte, setDifficulte] = useState<Difficulte>("facile");

    const basculerDifficulte = (id: Difficulte) => {
        setDifficulte((actuelle) => (actuelle === id ? actuelle : id));
    };

    return (
        <div className="flex flex-col items-center">
            <DotPattern
                glow
                className="[mask-image:radial-gradient(1280px_circle_at_center,white,transparent)]"
            />
            <Header afficherMenuProfil={true} />
            <main className="flex mt-16 w-full flex-col items-center px-4 py-8">
                <h1 className="text-3xl font-bold">Bienvenue sur la page du Quizz !</h1>
                <p className="mt-4 text-lg text-base-content/70">Ici, vous pouvez tester vos connaissances et apprendre de nouvelles choses.</p>

                <fieldset className="fieldset mt-10 w-full max-w-md rounded-box border border-base-300 bg-base-100/80 p-6 shadow-md backdrop-blur">
                    <legend className="fieldset-legend text-base font-semibold">Choisis ta difficulté</legend>
                    <div className="flex flex-col gap-2">
                        {difficultes.map((option) => (
                            <label
                                key={option.id}
                                className="label cursor-pointer items-start gap-3 rounded-box border border-base-300 bg-base-100 px-4 py-3 transition-colors hover:border-primary/60 has-[:checked]:border-primary has-[:checked]:bg-primary/10"
                            >
                                <input
                                    type="checkbox"
                                    className="checkbox checkbox-primary mt-0.5"
                                    checked={difficulte === option.id}
                                    onChange={() => basculerDifficulte(option.id)}
                                />
                                <span className="flex flex-col">
                                    <span className="font-medium">{option.label}</span>
                                    <span className="text-xs text-base-content/60">{option.description}</span>
                                </span>
                            </label>
                        ))}
                    </div>
                    <button type="button" className="btn btn-primary mt-6 w-full">
                        <Play aria-hidden="true" className="size-4" />
                        Démarrer le jeu
                    </button>
                </fieldset>
            </main>
        </div>
    );
}
