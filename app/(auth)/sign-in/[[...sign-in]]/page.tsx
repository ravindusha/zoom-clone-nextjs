import { SignIn } from '@clerk/nextjs';
import React from 'react';

const SignInPage = () => {
  return (
    <main className='flex w-full h-screen justify-center items-center bg-dark-2'>
      <SignIn />
    </main>
  );
};

export default SignInPage;
