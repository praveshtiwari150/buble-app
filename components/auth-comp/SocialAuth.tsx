"use client";

import React from 'react'
import { Button } from '../ui/button';
import { signIn } from 'next-auth/react';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { FcGoogle } from "react-icons/fc";

const SocialAuth = () => {

    const handleSocialLogin = (provider: string) => {
        signIn(provider, {
          callbackUrl: DEFAULT_LOGIN_REDIRECT,
        });
    };

  return (
    <Button
      type="submit"
      variant={"outline"}
      className="w-full border border-blue-500 hover:border-blue-800"
      onClick={() => {
        handleSocialLogin("google");
      }}
    >
      Login with <FcGoogle className="h-5 w-5" />
    </Button>
  );
}

export default SocialAuth
