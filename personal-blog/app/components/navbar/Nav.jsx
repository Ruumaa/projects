import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import HandleSignOut from './HandleSignOut';
import HandleAddBlog from './HandleAddBlog';
import HandleUserBlog from './HandleUserBlog';
import { IoIosArrowDropdown } from 'react-icons/io';

const Nav = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="navbar bg-primary justify-between">
      <div className="flex">
        <button className="btn btn-ghost ">
          <Link href="/" className="flex items-center gap-1">
            <h3 className="text-slate-300 font-serif font-semibold text-xl ">
              <span className="text-secondary">Blog</span>App
            </h3>
          </Link>
        </button>
      </div>
      <div className="dropdown dropdown-hover dropdown-bottom dropdown-end ml-auto">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost text-slate-300 group font-mono"
        >
          Blog
          <IoIosArrowDropdown
            size={20}
            className="text-secondary -ml-1 transform transition-transform group-hover:rotate-180"
          />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[100] menu p-2 shadow bg-base-100 rounded w-40"
        >
          <li>
            <HandleUserBlog session={session} />
          </li>
          <li>
            <HandleAddBlog session={session} />
          </li>
        </ul>
      </div>
      <HandleSignOut session={session} />
    </div>
  );
};

export default Nav;
