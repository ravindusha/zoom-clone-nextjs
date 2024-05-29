import { SignUp } from '@clerk/nextjs';

const SignUpPage = () => {
  return (
    <main className='flex w-full h-screen justify-center items-center bg-dark-2'>
      <SignUp />
    </main>
  );
};

export default SignUpPage;
