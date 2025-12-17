import z from "zod";

const authValidationSchema = z.object({
    password: z.string().nonempty("Password is required"),
    email: z.email().nonempty("Email is required"),
})

export const AuthValidation = {
    authValidationSchema
}