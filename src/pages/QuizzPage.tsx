import { useState } from "react";
import { Play } from "lucide-react";
import Header from "@/components/Header";
import { DotPattern } from "@/registry/magicui/dot-pattern";
import { Link } from "react-router";

const difficultes = [
    { id: "facile", label: "Facile", outline: "btn-outline btn-success", filled: "btn-success" },
    { id: "moyen", label: "Moyen", outline: "btn-outline btn-warning", filled: "btn-warning" },
    { id: "difficile", label: "Difficile", outline: "btn-outline btn-error", filled: "btn-error" },
] as const;

type Difficulte = (typeof difficultes)[number]["id"];

export default function QuizzPage() {
    const [difficulte, setDifficulte] = useState<Difficulte>();
    const [isLevelSelected, setIsLevelSelected] = useState(false);
    const basculerDifficulte = (id: Difficulte) => {
        setDifficulte((actuelle) => (actuelle === id ? actuelle : id));
        setIsLevelSelected(true);
    };

    return (
        <div className="flex flex-col items-center">
            <DotPattern
                glow
                className="[mask-image:radial-gradient(1280px_circle_at_center,white,transparent)]"
            />
            <Header afficherMenuProfil={true} />
            <main className="flex mt-18 w-full flex-col items-center px-4 py-16">
                <div className="w-full max-w-lg text-center space-y-4">
                    <h1 className="text-4xl font-light tracking-tight text-base-content">Joues pour te tester !</h1>
                    <p className="text-lg text-base-content/60">Choisis le niveau qui te convient afin de t'entraîner.</p>
                </div>

                <div className="mt-10 flex w-full max-w-lg flex-col gap-4" role="radiogroup" aria-label="Niveau de difficulté">
                    {difficultes.map((option) => {
                        const isSelected = difficulte === option.id;

                        return (
                            <button
                                key={option.id}
                                type="button"
                                role="radio"
                                aria-checked={isSelected}
                                onClick={() => basculerDifficulte(option.id)}
                                className={`btn font-bold w-full ${isSelected ? option.filled : option.outline}`}
                            >
                                {option.label}
                            </button>
                        )
                    })}
                </div>

                <Link to={`/${difficulte}`} disabled={!isLevelSelected} className="mt-12 btn btn-primary btn-lg w-full max-w-lg gap-2 text-lg active:scale-[0.98]">
                    <Play aria-hidden="true" className="size-5" />
                    Démarrer le jeu
                </Link>
            </main>
        </div>
    );
}
