import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function QuizzPage() {
    return (
        <div className="flex min-h-dvh flex-col items-center">
            <Header afficherMenuProfil={true} />
            <main className="flex w-full flex-1 flex-col items-center justify-center px-4 py-8">
                <h1 className="text-3xl font-bold">Bienvenue sur la page du Quizz !</h1>
                <p className="mt-4 text-lg text-gray-600">Ici, vous pouvez tester vos connaissances et apprendre de nouvelles choses.</p>
                {/* Ajoutez ici le contenu de votre quizz */}
            </main>
            <Footer />
        </div>
    );
}