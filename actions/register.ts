"use server";

import * as z from "zod";
import bcrypt from "bcryptjs";
import { RegisterSchema } from "@/schema";
import { error } from "console";
import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";

export const registerUser = async (values: z.infer<typeof RegisterSchema>) => {
    const isValidated = RegisterSchema.safeParse(values);

    if (!isValidated.success) {
        return { error: "Invalid field!" };
    }

    const { name, email, password } = isValidated.data;

    const userExists = await getUserByEmail(email);

    if (userExists) {
        return { error: "User already exists!"}
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // create user
    await db.user.create({
        data: {
            name,
            email,
            password: hashedPassword
        }
    });

    return { success: "User created successfully" };

}