import type { UserGoogle } from "@/types/userGoogle";
import {useNavigate} from "react-router";

export default function useRedirectDashboard() {
        const navigate = useNavigate()
        const storedUser = localStorage.getItem('user');
        const user: UserGoogle | null = storedUser ? JSON.parse(storedUser) : null; // Retrieve user from localStorage
        
        if (user && user.uid){
            return () => navigate('/dashboard');
        }
}