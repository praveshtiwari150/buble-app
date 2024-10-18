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
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { LoginSchema } from "@/schema";
import { SubmitHandler, useForm } from "react-hook-form";
import { login } from "@/actions/login";
import FormError from "../FormError";
import SocialAuth from "./SocialAuth";

type LoginFormValues = z.infer<typeof LoginSchema>;

export const SignInForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [disable, setDisable] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
  } = useForm<LoginFormValues>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = async (values: LoginFormValues) => {
    setError("");
    setSuccess("");
    setDisable(true);
    try {
      // sign in logic
      const response = await login(values);

      if (response?.error) {
        reset();
        setError(response.error);
      }

      if (response) {
        reset();
      } 

      // dont know why it returns an error so i have added this 
      return;
    } catch (error) {
      console.error(error);
      setError("Error while login!");
    } finally {
      setDisable(false);
    }
  };

  return (
    <div>
      <Card className="w-[350px] border border-blue-200">
        <CardHeader>
          <CardTitle className="flex justify-center items-center gap-0">
            <Image src={"/bubble-logo.svg"} width={48} height={48} alt="" />
            <div className="text-2xl font-bold text-blue-600">Bubble</div>
          </CardTitle>
          <CardDescription className="text-lg font-semibold text-center  text-smoke-900">
            Login
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid w-full items-center gap-4">
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
                  placeholder="abcde@1234"
                  onClick={() => {
                    clearErrors("password");
                  }}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm font-medium">
                    {errors.password.message}
                  </p>
                )}
              </div>
              {error && <FormError message={error} />}
              <Button
                type="submit"
                className="w-full border bg-blue-500 text-white hover:bg-blue-800"
                disabled={disable}
              >
                {disable ? "Please wait..." : "Login"}
              </Button>
            </div>
          </form>
        </CardContent>
        <div className="text-center">or</div>
        <CardFooter className="flex flex-col justify-center items-center gap-1">
          <SocialAuth/>
          <Link
            className="underline text-sky-500 hover:text-sky-700 mt-2"
            href={"/sign-up"}
          >
            Don't have account? Sign Up
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};
