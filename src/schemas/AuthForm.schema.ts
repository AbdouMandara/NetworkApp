import {z} from "zod"

const AuthFormSchema = z.object({
    email: z.email({message: "Adresse email invalide"}),
    password: z.string().min(6, {message: "Le mot de passe doit contenir au moins 6 caractères"}),
    name: z.string().min(2, {message: "Le nom doit contenir au moins 2 caractères"}).max(100, {message: "Le nom doit contenir au plus 100 caractères"})
})

export default AuthFormSchema
export type AuthFormData = z.infer<typeof AuthFormSchema>