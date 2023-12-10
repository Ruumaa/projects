'use client';
import { signIn } from 'next-auth/react';
import AuthForm2 from './AuthForm2';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const SignInform = () => {
  const router = useRouter();
  const handleLogin = async (values) => {
    const { email, password } = await values;
    const signInData = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    if (signInData?.error) {
      toast.error('Invalid email or password');
    } else {
      toast.success('Login Success');
      router.push('/');
      router.refresh();
    }
  };
  return (
    <div>
      <AuthForm2 isRegister={false} submit={handleLogin} />
    </div>
  );
};

export default SignInform;
