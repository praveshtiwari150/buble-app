import React, {Suspense} from 'react'
import { SignInForm } from '@/components/auth-comp/SignInForm'

const Signin = async () => {
  
  return (
    <div className="flex justify-center items-center h-screen">
      <Suspense>
        <SignInForm />
      </Suspense>
    </div>
  );
}

export default Signin
