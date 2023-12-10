'use client';

import Image from 'next/legacy/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import registerPic from '@/public/registration.jpg';
import loginPic from '@/public/login.jpg';

const AuthForm = ({ isRegister, submit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <div className="flex flex-row card w-full bg-secondary shadow-xl rounded-lg mx-auto justify-center mt-16 h-auto text-slate-200">
        <div className="w-1/2 p-10 ">
          <div className="justify-center">
            <div className="text-left">
              <h2 className="text-4xl font-bold">
                {isRegister ? 'Sign Up' : 'Sign In'}
              </h2>
              <p className="font-semibold mb-7">
                {isRegister ? (
                  <>
                    Register your account to get{' '}
                    <span className="text-accent font-bold hover:text-primary">
                      Started!
                    </span>
                  </>
                ) : (
                  <>
                    Let&apos;s make some{' '}
                    <span className="text-accent font-bold hover:text-primary">
                      Todos!
                    </span>
                  </>
                )}
              </p>
            </div>
            <form onSubmit={handleSubmit(submit)}>
              <div className="form-control w-full mx-auto mb-5">
                {isRegister ? (
                  <>
                    <label className="label font-medium">Username</label>
                    <input
                      className="input bg-primary rounded-lg "
                      placeholder="John"
                      {...register('username', { required: true })}
                    />
                    {errors.username && (
                      <p className="text-red-600 m-px">Username is required</p>
                    )}
                  </>
                ) : null}
                <label className="label font-medium">Email</label>
                <input
                  className="input bg-primary rounded-lg "
                  placeholder="john@mail.com"
                  type="email"
                  {...register('email', { required: true })}
                />
                {errors.email && (
                  <p className="text-red-600 m-px">Email is required</p>
                )}
                <label className="label font-medium">Password</label>
                <input
                  className="input bg-primary rounded-lg "
                  placeholder="*****"
                  type="password"
                  {...register('password', { required: true })}
                />
                {errors.password && (
                  <p className="text-red-600 m-px">Password is required</p>
                )}
              </div>
              <button
                className="btn btn-outline btn-primary w-full rounded-full text-md mt-1"
                type="submit"
              >
                {isRegister ? 'Register' : 'Log in'}
              </button>
              <p className="text-center text-slate-200 mt-3 mb-1">
                {isRegister ? (
                  'Already have an account '
                ) : (
                  <>If you don&apos;t have an account, please&nbsp;</>
                )}
                {isRegister ? (
                  <Link
                    href="/auth/sign-in"
                    className="text-primary font-semibold hover:underline cursor-pointer"
                  >
                    Sign in
                  </Link>
                ) : (
                  <Link
                    href="/auth/sign-up"
                    className="text-primary font-semibold hover:underline cursor-pointer"
                  >
                    Sign up
                  </Link>
                )}
              </p>
            </form>
          </div>
        </div>
        <div className="w-1/2 relative overflow-hidden rounded-r">
          {isRegister ? (
            <Image
              src={registerPic}
              layout="fill"
              sizes="(max-width: 768px) 100vw"
              objectFit="cover"
              alt="register-page"
              placeholder="blur"
            />
          ) : (
            <Image
              src={loginPic}
              layout="fill"
              sizes="(max-width: 768px) 100vw"
              objectFit="cover"
              alt="login-page"
              placeholder="blur"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default AuthForm;
