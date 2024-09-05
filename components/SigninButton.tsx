"use client";

import React from 'react'
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

const SigninButton = () => {
    const router = useRouter();

  return (
    <div>
      <Button
        className="bg-blue-500 text-white cursor-pointer"
        onClick={() => {
          router.push("/sign-in");
        }}
      >
        Login
      </Button>
    </div>
  );
}

export default SigninButton;
