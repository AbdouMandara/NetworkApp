import { useEffect, useState } from "react";
import {type UserGoogle } from "@/types/userGoogle";
import { DotPattern } from "@/registry/magicui/dot-pattern";
import Header from "@/components/Header";
import LoadingOverlay from "@/components/LoadingOverlay";
import {useNavigate} from "react-router";
import ListClassement from "@/components/ListClassement";

export default function Dashboard() {
    const [user, setUser] = useState<UserGoogle>();
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
        useEffect(() => {
            const frame = window.requestAnimationFrame(() => {
                try {
                    const storedUser = localStorage.getItem('user');
                    const userLocalStorage: UserGoogle | null = storedUser ? JSON.parse(storedUser) : null;

                    if (userLocalStorage?.uid) {
                        setUser({
                            uid: userLocalStorage.uid,
                            displayName: userLocalStorage.displayName || null,
                            email: userLocalStorage.email || null,
                            photoURL: userLocalStorage.photoURL || null,
                            createdAt: userLocalStorage.createdAt || new Date(),
                        });
                    } else {
                        navigate('/login');
                    }
                } catch (error) {
                    console.error('Erreur lors de la récupération des détails de l\'utilisateur:', error);
                } finally {
                    setIsLoading(false);
                }
            });

            return () => window.cancelAnimationFrame(frame);
        }, [navigate]);
    return (
        <>
            <div className="flex h-dvh min-h-[36rem] flex-col items-center">
                <DotPattern
                    glow
                    className="[mask-image:radial-gradient(1280px_circle_at_center,white,transparent)]"
                />
                <Header afficherMenuProfil={true} userActuel={user} />

                <main className="mt-[100px] w-full h-full grid grid-flow-col grid-rows-2 gap-8 lg:px-[103px] py-6 ">
                    <div className='col-span-2'>
                        <h1 className='text-3xl mb-4'>Coucou, {user?.displayName} !</h1>
                        <ListClassement />
                    </div>
                    <div className="col-span-2 mt-4">
                        <h1>Petit Tip du jour</h1>
                        <p>'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio fugit aliquid eligendi suscipit! Neque, eligendi.'</p>
                    </div>
                    <div className='row-span-2 bg-base-100 px-4 py-2 shadow-sm'>
                        <h1>Ton best score</h1>
                        <h1>100</h1>
                        <div>
                            <p>Tes badges</p>
                        </div>
                    </div>
                </main>
            </div>
            {isLoading && (
                <LoadingOverlay />
            )}
        </>
  );
}