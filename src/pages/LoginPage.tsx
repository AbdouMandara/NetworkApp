import Header from "@/components/Header"
import { DotPattern } from "@/registry/magicui/dot-pattern"
export default function LoginPage(){
    return(
        <>
                    <div className="flex min-h-screen flex-col items-center py-4 px-6">
                        <DotPattern
                                    glow
                                    className="[mask-image:radial-gradient(1280px_circle_at_center,white,transparent)]"
                                />
                        <Header />
                    

                    <section className="flex h-screen w-full max-w-xs flex-col items-center justify-center gap-4 py-4">
                        <p className="font-bold tracking-tight  text-balance sm:text-2xl">
                            Viens apprendre !
                        </p>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                            <label className="label">Pseudo</label>
                            <input type="text" className="input" placeholder="Entrez votre pseudo" />
                            <button className="btn btn-neutral mt-4">Démarrer</button>
                        </fieldset>
                            <div className="divider">OU</div>
                        {/* Google */}
                        <button className="btn bg-white w-full text-black border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Continuer avec Google
                        </button>
                    </section>
            </div>
        </>
    )
}