import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";
import bcrypt from "bcryptjs";

import { LoginSchema } from "./schema";
import { getUserByEmail } from "./data/user";

export default {
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        Credentials({
            async authorize(credentials) {
                const isValidated = LoginSchema.safeParse(credentials);
                
                if (isValidated.success) {
                    const { email, password } = isValidated.data;

                    const user = await getUserByEmail(email);
                    
                    if (!user || !user.password) {
                        return null;
                    }

                    const passwordMatch = await bcrypt.compare(password, user.password);

                    if (passwordMatch)
                        return user;
                }

                return null;
           }
        })
] } satisfies NextAuthConfig;