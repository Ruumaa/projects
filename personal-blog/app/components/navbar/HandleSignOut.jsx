'use client';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FaRegUser } from 'react-icons/fa';

const HandleSignOut = ({ session }) => {
  const router = useRouter();
  return (
    <div className="flex">
      <button
        className="btn btn-ghost"
        onClick={() => {
          session
            ? signOut({
                redirect: true,
                callbackUrl: `${window.location.origin}/auth/sign-in`,
              })
            : router.push('/auth/sign-in');
        }}
      >
        <div className="flex items-center gap-1">
          <FaRegUser size={18} className="text-secondary" />
          <h3 className="text-slate-300 font-bold font-mono">
            {session ? 'Logout' : 'Login'}{' '}
          </h3>
        </div>
      </button>
    </div>
  );
};

export default HandleSignOut;
