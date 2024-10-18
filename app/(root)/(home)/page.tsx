import { auth } from '@/auth'
import { redirect } from 'next/navigation';
import { decode, encode } from "next-auth/jwt";
import React from 'react'

const Home = async () => {
  const session = await auth();
  console.log(session);
  return (
    <div>
      Home 
    </div>
  )
}

export default Home
