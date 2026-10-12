import { useEffect, useState } from "react";
import {type UserGoogle } from "@/types/userGoogle";
import { DotPattern } from "@/registry/magicui/dot-pattern";
import Header from "@/components/Header";
import LoadingOverlay from "@/components/LoadingOverlay";
import {useNavigate} from "react-router";
import ListClassement from "@/components/ListClassement";
import { LogOut, Medal, User } from "lucide-react";

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
                <Header afficherMenuProfil={false} userActuel={user} />

                <main className="mt-[100px] w-full h-max grid grid-flow-col grid-rows-2 gap-8 lg:px-[103px] py-6 ">
                    <div className='col-span-2'>
                        <h1 className='text-3xl mb-4'>Coucou cher <strong> lover du réseau </strong>!</h1>
                        <ListClassement />
                    </div>
                    <div className="col-span-2 mt-4">
                        <h1 className='text-3xl mb-2'>Petit Tip du jour</h1>
                        <p className='text-lg'>'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio fugit aliquid eligendi suscipit! Neque, eligendi.'</p>
                    </div>
                    <div className='row-span-2 bg-base-100 px-8 py-6  shadow-sm'>
                        <div className="mb-6 flex flex-col items-center text-center">
                            <div className="h-20 w-20 overflow-hidden rounded-full bg-gray-200">
                                {user?.photoURL ? (
                                    <img src={user.photoURL} alt="Photo de profil" className="h-full w-full object-cover" />
                                ) : (
                                    <User className="h-full w-full p-5 text-gray-500" aria-hidden="true" />
                                )}
                            </div>
                            <p className="mt-3 text-lg font-semibold">{user?.displayName}</p>
                            <button
                                type="button"
                                className="btn btn-ghost btn-sm mt-2"
                                onClick={() => {
                                    localStorage.removeItem("user");
                                    navigate("/login");
                                }}
                            >
                                <LogOut className="h-4 w-4" aria-hidden="true" />
                                Déconnexion
                            </button>
                        </div>
                        <h1 className='text-xl mb-2'>Ton best score</h1>
                        <h1 className='text-3xl font-bold text-center'>100</h1>
                        <div>
                            <h1 className='text-xl mb-2 mt-4'>Tes badges</h1>
                            <div className="gap-2 w-full mt-2 flex justify-between">
                                <Medal className="w-6 h-6 text-red-500 tooltip"  data-tip="Le monstre" />
                                <Medal className="w-6 h-6 text-green-500 tooltip"  data-tip="Le king" />
                                <Medal className="w-6 h-6 text-yellow-500 tooltip"  data-tip="Le Networker" />

                            </div>
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