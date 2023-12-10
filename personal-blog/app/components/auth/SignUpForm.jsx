'use client';
import { toast } from 'react-toastify';
import AuthForm2 from './AuthForm2';
import { useRouter } from 'next/navigation';

const SignUpForm = () => {
  const router = useRouter();
  const handleRegister = async (values) => {
    const { username, email, password } = await values;
    const response = await fetch('/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    });

    const result = await response.json();
    if (response.ok) {
      toast.success(result.message);
      router.push('/auth/sign-in');
      router.refresh();
    } else {
      toast.error(result.message);
    }
  };
  return (
    <div>
      <AuthForm2 isRegister={true} submit={handleRegister} />
    </div>
  );
};

export default SignUpForm;
