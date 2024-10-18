import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email is required."
    }),
    password: z.string().min(1, {
        message:"Password is required."
    })
})

export const RegisterSchema = z.object({
    name: z.string().nonempty("Name is required").min(3, {
        message: "Name must be atleast 3 characters long"
    }),
    email: z.string().email({
        message: "Email is required."
    }),
    password: z.string().nonempty("Password is required.").min(6, {
        message: "Password should be of minimum 6 characters"
    })
})