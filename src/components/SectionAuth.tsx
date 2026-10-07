import { Link } from "react-router";
import { type TypeForm } from "@/types/TypeForms"

interface TextProps{
    titre_formulaire : string;
    titre_btn : string;
    type_form : TypeForm;
}

export default function SectionAuth({titre_formulaire, titre_btn, type_form}:TextProps){
    return(
        <>
                        <section className="flex w-full max-w-xs flex-1 flex-col items-center justify-center gap-4 py-4 mt-18">
                    <p className="font-bold tracking-tight text-balance sm:text-2xl">
                        {titre_formulaire}
                    </p>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <label className="label">Pseudo</label>
                        <input type="text" className="input" placeholder="Entrez votre pseudo" />
                        <label className="label">Mot de passe</label>
                        <input type="password" className="input" placeholder="Entrez votre mot de passe" />
                        <button className="btn btn-neutral mt-4">{titre_btn}</button>
                        {type_form === "login" ? (
                            <p className="text-muted-foreground text-center mt-2">
                                Tu es nouveau ? <Link to="/register" className="link link-primary underline">Inscris-toi</Link>
                            </p>

                        ):(
                            <p className="text-muted-foreground text-center mt-2">
                                Tu as déjà un compte ? <Link to="/login" className="link link-primary underline">Connecte-toi</Link>
                            </p>
                        )}
                    </fieldset>
                    <div className="divider">OU</div>
                    {/* Google */}
                    <button className="btn bg-white w-full text-black border-[#e5e5e5]">
                        <svg
                            aria-label="Google logo"
                            width="16"
                            height="16"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                        >
                            <g>
                                <path d="m0 0H512V512H0" fill="#fff"></path>
                                <path
                                    fill="#34a853"
                                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                                ></path>
                                <path
                                    fill="#4285f4"
                                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                                ></path>
                                <path
                                    fill="#fbbc02"
                                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                                ></path>
                                <path
                                    fill="#ea4335"
                                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                                ></path>
                            </g>
                        </svg>
                        Continuer avec Google
                    </button>
                    <Link to='/' className="link link-primary underline text-sm">
                        Retour à l'accueil
                    </Link>
                </section>
        </>
    )
}