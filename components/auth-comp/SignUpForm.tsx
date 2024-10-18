"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "../ui/label";
import { Input } from "@/components/ui/input";
import React, { ChangeEvent, FormEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterSchema } from "@/schema";
import { registerUser } from "@/actions/register";
import FormError from "../FormError";
import SocialAuth from "./SocialAuth";

type RegisterFormValues = z.infer<typeof RegisterSchema>;

export const SignUpForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [disable, setDisable] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit = async (values: RegisterFormValues) => {
    setError("");
    setSuccess("");
    setDisable(true);
    try{
      // registration logic
      const user = await registerUser(values);
      reset();
      if (!user.success) {
        setError(user.error);
        return;
      }

      setSuccess(user.success);
    }
    catch (error) {
      console.error(error);
      setError("An unexpected error occured!");
    }
    finally {
      setDisable(false);
    }
  }
  
  return (
    <div>
      <Card className="w-[350px] border border-blue-200">
        <CardHeader>
          <CardTitle className="flex justify-center items-center gap-0">
            <Image src={"/bubble-logo.svg"} width={48} height={48} alt="" />
            <div className="text-2xl font-bold text-blue-600">Bubble</div>
          </CardTitle>
          <CardDescription className="text-lg font-semibold text-center  text-smoke-900">
            Create Account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="John Doe"
                  onClick={() => clearErrors("name")}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm font-medium">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="mail@example.com"
                  onClick={() => clearErrors("email")}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm font-medium">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  {...register("password", { required: true })}
                  type="password"
                  placeholder="abc@1234"
                  onClick={() => clearErrors("password")}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm font-medium">
                    {errors.password.message}
                  </p>
                )}
              </div>
              {error && <FormError message={error}/>}
              <Button
                type="submit"
                className="w-full border bg-blue-500 text-white hover:bg-blue-700"
                disabled={disable}
              >
                {disable ? "Please Wait..." : "Sign Up"}
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col justify-center items-center gap-2">
          <span>or</span>
            <SocialAuth/>
          {success ? (
            <Link
              href={"/sign-in"}
              className="underline text-sm text-green-500 hover:text-green-700 text-center mt-2"
            >
              Registration successfull. Click here and login
            </Link>
          ) : (
            <Link
              className="underline text-sky-500 hover:text-sky-700 mt-2"
              href={"/sign-in"}
            >
              Already have an account? Login
            </Link>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};
