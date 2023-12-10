import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import HandleSignOut from './HandleSignOut';
import HandleAddBlog from './HandleAddBlog';
import HandleUserBlog from './HandleUserBlog';

const Nav = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="navbar bg-primary justify-around">
      <HandleAddBlog session={session} />
      <div className="flex mx-auto">
        <button className="btn btn-ghost ">
          <Link href="/" className="flex items-center gap-1">
            <h3 className="text-slate-300 font-serif font-semibold text-xl ">
              <span className="text-secondary">Blog</span>App
            </h3>
          </Link>
        </button>
      </div>
      <HandleUserBlog session={session} />
      <HandleSignOut session={session} />
    </div>
  );
};

export default Nav;
