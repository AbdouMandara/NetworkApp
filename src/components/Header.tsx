import { Moon, Sun, User } from "lucide-react";
import { type UserGoogle } from "@/types/userGoogle";
import { useNavigate } from "react-router"; 
interface HeaderProps {
    afficherMenuProfil: boolean;
    userActuel?: UserGoogle | null;
}
export default function Header({ afficherMenuProfil, userActuel }: HeaderProps) {
    const navigate = useNavigate();
    const logout = ()=>{
        localStorage.removeItem("user")
        navigate('/login');
    }
    
    return (
        <div className="navbar fixed top-4 z-50 max-w-6xl rounded-2xl border border-[#e5e5e5] bg-base-100 px-4 py-2 shadow-sm backdrop-blur-sm">
            <div className="navbar-start">
                <a className="btn btn-ghost text-xl">NetworkApp</a>
            </div>

            <div className="navbar-end gap-2">
                <label className="swap swap-rotate btn btn-ghost btn-circle" aria-label="Changer de thème">
                    <input type="checkbox" className="theme-controller" value="dark" />
                    <Sun className="swap-off h-5 w-5" aria-hidden="true" />
                    <Moon className="swap-on h-5 w-5" aria-hidden="true" />
                </label>
                {afficherMenuProfil && (
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar" aria-label="Ouvrir le menu du profil">
                        <div className="w-10 rounded-full">
                            {userActuel?.photoURL ? (
                                <img
                                    alt="Photo de profil"
                                    src={userActuel.photoURL}
                                />
                            ) : (
                                <User className="w-full h-6"/>
                            )}
                        </div>
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content z-1 mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
                    >
                        <li><a>Voir ton profil</a></li>
                        <li><button onClick={logout}>Déconnexion</button></li>
                    </ul>
                </div>)}
            </div>
        </div>
    );
}