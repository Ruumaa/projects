'use client';

import Image from 'next/legacy/image';
import { useForm } from 'react-hook-form';
import { FaFacebook } from 'react-icons/fa';
import { FaGooglePlus } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import abstracPic from '@/public/abstrac.jpg';
import { useRouter } from 'next/navigation';

const AuthForm2 = ({ isRegister, submit }) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <>
      <div className="flex flex-row min-h-screen outline text-primary my-10 shadow-xl">
        {isRegister ? (
          <>
            <div className="w-2/6 relative overflow-hidden">
              <div className="image-full bg-base-100 shadow-xl ">
                <Image
                  src={abstracPic}
                  layout="fill"
                  sizes="(max-width: 768px) 100vw"
                  objectFit="cover"
                  alt="login"
                  placeholder="blur"
                  className="rotate-180"
                />
                {/* isRegister = auth/sign-up */}
                <div className="absolute inset-0 flex flex-col text-center text-slate-200 items-center justify-center text-2xl z-50 bg-primary opacity-80 ">
                  <h1 className="text-5xl font-bold font-sans mb-10">
                    Hello, Friend!
                  </h1>
                  <div className="w-3/4">
                    <p className="text-lg font-medium">
                      To keep connected with us please login with your account
                    </p>
                  </div>
                  <button
                    className="btn btn-base-100 w-1/2 rounded-full text-md mt-6"
                    onClick={() => router.push('/auth/sign-in')}
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : null}
        <div className="flex flex-col w-4/6 items-center justify-center text-slate-900">
          <h1 className="text-5xl font-sans font-bold">
            {isRegister ? 'Create Your Account' : ' Login to Your Account'}
          </h1>
          <p className="my-3 text-xl text-slate-700">
            Login using social networks
          </p>
          <div className="flex justify-center gap-8 w-1/2">
            <div>
              <FaFacebook size={35} />
            </div>
            <div>
              <FaGooglePlus size={35} />
            </div>
            <div>
              <FaGithub size={35} />
            </div>
          </div>
          <div className="w-4/6">
            <div className="divider font-medium text-sm -mb-1">OR</div>
            <form onSubmit={handleSubmit(submit)}>
              <div className="w-full mx-auto form-control">
                {isRegister ? (
                  <>
                    {' '}
                    <label className="label font-medium">Username</label>
                    <input
                      className="input bg-primary text-slate-200  rounded-full"
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
                  className="input bg-primary text-slate-200  rounded-full"
                  placeholder="john@mail.com"
                  {...register('email', { required: true })}
                />
                {errors.email && (
                  <p className="text-red-600 m-px">Email is required</p>
                )}
                <label className="label font-medium">Password</label>
                <input
                  className="input bg-primary text-slate-200  rounded-full"
                  placeholder="******"
                  type="password"
                  {...register('password', { required: true })}
                />
                {errors.password && (
                  <p className="text-red-600 m-px">Password is required</p>
                )}
              </div>
              <div className="flex w-full justify-center">
                <button
                  className="btn btn-primary btn-outline w-1/2 rounded-full text-md mt-8"
                  type="submit"
                >
                  {isRegister ? 'Sign Up' : 'Login'}
                </button>
              </div>
            </form>
          </div>
        </div>
        {isRegister ? null : (
          <>
            <div className="w-2/6 relative overflow-hidden">
              <div className="image-full bg-base-100 shadow-xl ">
                <Image
                  src={abstracPic}
                  layout="fill"
                  sizes="(max-width: 768px) 100vw"
                  objectFit="cover"
                  alt="login"
                  placeholder="blur"
                />
                {/* isRegister = auth/sign-up */}
                <div className="absolute inset-0 flex flex-col text-center text-slate-200 items-center justify-center text-2xl z-50 bg-primary opacity-80 ">
                  <h1 className="text-5xl font-bold font-sans mb-10">
                    New Here?
                  </h1>
                  <div className="w-3/4">
                    <p className="text-lg font-medium">
                      Sign Up and share what is in your head for free!
                    </p>
                  </div>
                  <button
                    className="btn btn-base-100 w-1/2 rounded-full text-md mt-6"
                    onClick={() => router.push('/auth/sign-up')}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default AuthForm2;
