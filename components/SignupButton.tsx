"use client";

import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const SignupButton = () => {
  const router = useRouter();

  return (
    <div>
      <Button
        className="border border-blue-500 text-blue-500 cursor-pointer"
        onClick={() => {
          router.push("/sign-up");
        }}
      >
        Sign Up
      </Button>
    </div>
  );
};

export default SignupButton;
