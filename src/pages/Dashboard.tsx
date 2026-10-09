import { useEffect, useState } from "react";
import {type UserGoogle } from "@/types/userGoogle";
import { DotPattern } from "@/registry/magicui/dot-pattern";
import Header from "@/components/Header";
import LoadingOverlay from "@/components/LoadingOverlay";
import {useNavigate} from "react-router";
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
          </div>
          {isLoading && (
            <LoadingOverlay />
          )}
          </>
  );
}