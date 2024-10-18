import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

import {db} from "@/lib/db"
import authConfig from "./auth.config"

const prisma = new PrismaClient()

export const { auth, handlers, signIn, signOut } = NextAuth({
    pages: {
        signIn: "/sign-in"
    },
    callbacks: {
        async session({ token, session }) {
            if (token.sub && session.user) {
                session.user.id = token.sub;
            }
            return session;
        }
    },
    adapter: PrismaAdapter(db),
    session: { strategy: "jwt" },
    ...authConfig,
})