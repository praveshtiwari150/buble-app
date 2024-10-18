"use server";

import * as z from "zod";
import bcrypt from "bcryptjs"
import { db } from "@/lib/db";
import { LoginSchema } from "@/schema";
import { error } from "console";
import { getUserByEmail } from "@/data/user";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";

export const login = async (values: z.infer<typeof LoginSchema>) => {
    const isValidated = LoginSchema.safeParse(values);

    if (!isValidated.success) {
        return {error: "Invalid field!"}
    }

    const { email, password } = isValidated.data;

    const user = await getUserByEmail(email);

    if (!user || !user.email || !user.password) {
        return { error: "User does not exist!" };
    }

    try {
        await signIn("credentials", {
            email,
            password,
            redirectTo: DEFAULT_LOGIN_REDIRECT
        })
    }

    catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return { error: "Invalid Credentials!" }
                default:
                    return {error: "Something went wrong!"}
            }
        }

        throw error;
    }
}