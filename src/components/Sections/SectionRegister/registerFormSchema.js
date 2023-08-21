import { z } from "zod"

export const registerFormSchema = z.object({
    name: z.string().nonempty("O nome é obrigatório"),
    email: z.string().nonempty("O email é obrigatório").email("Forneça um email válido"),
    password: z
        .string()
        .nonempty("A senha é obrigatória")
        .min(8, "São necessárias pelo menos oito caracteres")
        .regex(/[A-Z]+/, "É necessário conter pelo menos uma letra maiúscula")
        .regex(/[a-z]+/, "É necessário conter pelo menos uma letra minúscula")
        .regex(/[0-9]+/, "É necessário conter pelo meno um número"),
    bio:z.string().nonempty("A bio é obrigatória"),
    contact:z.string().nonempty("O contato é obrigatório"),
    course_module:z.string().nonempty("O módulo é obrigatório"),
    confirmPassword: z.string().nonempty("Confirmar senha é obrigatória"),
}).refine(({password, confirmPassword}) => password === confirmPassword,{
    message: "As senhas não correspondem", 
    path: ["confirmPassword"]
})