import z from "zod";

const registerValidationSchema = z.object({
    name: z.string().nonempty("Name is required"),
    password: z.string().nonempty("Password is required"),
    email: z.email().nonempty("Email is required"),
})


const loginValidationSchema = z.object({
    password: z.string().nonempty("Password is required"),
    email: z.email().nonempty("Email is required"),
})

export const AuthValidation = {
    registerValidationSchema,
    loginValidationSchema
}