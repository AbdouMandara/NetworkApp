import { useEffect, useState } from "react";
import {type UserGoogle } from "@/types/userGoogle";
export default function Dashboard() {
        const [user, setUser] = useState<UserGoogle>();
        
        const fetchUserDetails = async () => {
            // setLoading(true);
          try {
            const storedUser = localStorage.getItem('user');
            const user: UserGoogle | null = storedUser ? JSON.parse(storedUser) : null; // Retrieve user from localStorage
          
          if (user && user.uid){
            setUser({
              uid: user.uid,
              displayName: user?.displayName || null,
              email: user?.email || null,
              photoURL: user?.photoURL || null,
              createdAt: user?.createdAt || new Date(),
            });
          console.log(user)
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
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard!{user?.displayName}</p>
    </div>
  );
}