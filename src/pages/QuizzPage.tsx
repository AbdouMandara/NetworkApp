import { useState } from "react";
import { Play } from "lucide-react";
import Header from "@/components/Header";
import { DotPattern } from "@/registry/magicui/dot-pattern";

const difficultes = [
    { id: "facile", label: "Facile" },
    { id: "moyen", label: "Moyen" },
    { id: "difficile", label: "Difficile" },
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
                <h1 className="text-3xl font-bold">Joues pour te tester !</h1>
                <p className="mt-4 text-lg text-base-content/70">Chosis le niveau qui te convient afin de t'entraîner.</p>

                <div className="mt-10 flex w-full max-w-md flex-col gap-2">
                    {difficultes.map((option) => (
                        <label
                            key={option.id}
                            className="label cursor-pointer items-center gap-3 rounded-box border border-base-300 bg-base-100 px-4 py-3 transition-colors hover:border-primary/60 has-[:checked]:border-primary has-[:checked]:bg-primary/10"
                        >
                            <input
                                type="checkbox"
                                className="checkbox checkbox-primary checkbox-lg"
                                checked={difficulte === option.id}
                                onChange={() => basculerDifficulte(option.id)}
                            />
                            <span className="text-black text-2xl font-bold">{option.label}</span>
                        </label>
                    ))}
                    <button type="button" className="btn btn-primary mt-4 mt-6 w-full">
                        <Play aria-hidden="true" className="size-4" />
                        Démarrer le jeu
                    </button>
                </div>
            </main>
        </div>
    );
}
