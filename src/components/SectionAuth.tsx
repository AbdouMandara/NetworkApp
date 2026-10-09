import { Link } from "react-router";
import { loginWithGoogle, login, signUp } from '../auth'; 
import { type TypeForm } from "@/types/TypeForms"
import { useNavigate } from "react-router";
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import { useState } from "react";
import LoadingOverlay from "@/components/LoadingOverlay";
import AuthFormSchema, {type AuthFormData} from "@/schemas/AuthForm.schema"

interface TextProps{
    titre_formulaire : string;
    titre_btn : string;
    type_form : TypeForm;
}

export default function SectionAuth({titre_formulaire, titre_btn, type_form}:TextProps){
        const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
        const {
            register,
            handleSubmit,
            formState: {errors},
        } = useForm<AuthFormData>({
            resolver: zodResolver(AuthFormSchema)
        });
        const handleGoogleLogin = async () => {
            setIsLoading(true);
            try {
            await loginWithGoogle();
            navigate('/dashboard')
            } catch (error) {
            console.error('Error with Google login:', error);
            } finally {
                setIsLoading(false);
            }
        }

        const soumissionFormulaire = async(data: AuthFormData)=>{
            setIsLoading(true);
            try {
                if(type_form === "login"){
                    await login(data.email, data.password);
                    navigate('/dashboard')
                }else{
                    await signUp(data.name, data.email, data.password);
                    navigate('/dashboard')
                }
            } catch (error) {
                console.error('Error submitting form:', error);
            } finally {
                setIsLoading(false);
            }
        }
    return(
        <>
                    <section className="flex w-full max-w-xs flex-1 flex-col items-center justify-center gap-4 py-4 mt-18">
                        <p className="font-bold tracking-tight text-balance sm:text-2xl">
                            {titre_formulaire}
                        </p>
                    <form method="post" onSubmit={handleSubmit(soumissionFormulaire)} className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Entrez votre email" {...register("email")}/>
                        {type_form === "register" && (
                            <>
                                <label className="label">Pseudo</label>
                                <input type="text" className="input" placeholder="Entrez votre pseudo" {...register("name")}/>
                                {errors.name && <p className="text-error text-sm">{errors.name.message}</p>}
                            </>
                        )}
                        {errors.email && <p className="text-error text-sm">{errors.email.message}</p>}
                        {errors.password && <p className="text-error text-sm">{errors.password.message}</p>}
                        <label className="label">Mot de passe</label>
                        <input type="password" className="input" placeholder="Entrez votre mot de passe" {...register("password")}/>
                        <button className="btn btn-neutral mt-4" type="submit">{titre_btn}</button>
                        {type_form === "login" ? (
                            <p className="text-muted-foreground text-center mt-2">
                                Tu es nouveau ? <Link to="/register" className="link link-primary underline">Inscris-toi</Link>
                            </p>

                        ):(
                            <p className="text-muted-foreground text-center mt-2">
                                Tu as déjà un compte ? <Link to="/login" className="link link-primary underline">Connecte-toi</Link>
                            </p>
                        )}
                    </form>
                    <div className="divider">OU</div>
                    {/* Google */}
                    <button className="btn bg-white w-full text-black border-[#e5e5e5]" onClick={handleGoogleLogin}>
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
                {isLoading && <LoadingOverlay />}
        </>
    )

}
