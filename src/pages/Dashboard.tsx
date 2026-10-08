import { useEffect, useState } from "react";
import {type UserGoogle } from "@/types/userGoogle";
import { DotPattern } from "@/registry/magicui/dot-pattern";
import Header from "@/components/Header";
export default function Dashboard() {
        const [user, setUser] = useState<UserGoogle>();
        const fetchUserDetails = async () => {
          try {
            const storedUser = localStorage.getItem('user');
            const userLocalStorage: UserGoogle | null = storedUser ? JSON.parse(storedUser) : null; // Retrieve user from localStorage
          
          if (userLocalStorage && userLocalStorage.uid){
            setUser({
              uid: userLocalStorage.uid,
              displayName: userLocalStorage?.displayName || null,
              email: userLocalStorage?.email || null,
              photoURL: userLocalStorage?.photoURL || null,
              createdAt: userLocalStorage?.createdAt || new Date(),
            });
          }
        } catch (error) {  
          console.error('Erreur lors de la récupération des détails de l\'utilisateur:', error);
        } finally {
            console.log('terminer');
        }
      };
        
        useEffect(() => {
            fetchUserDetails();
        }, []);
  return (
        <div className="flex h-dvh min-h-[36rem] flex-col items-center">
            <DotPattern
                glow
                className="[mask-image:radial-gradient(1280px_circle_at_center,white,transparent)]"
            />
            <Header afficherMenuProfil={true} userActuel={user} />
      </div>
  );
}