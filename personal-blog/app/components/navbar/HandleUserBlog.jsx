'use client';
import { useRouter } from 'next/navigation';
import { MdOutlinePostAdd } from 'react-icons/md';
import { toast } from 'react-toastify';

const HandleUserBlog = ({ session }) => {
  const router = useRouter();
  const handleBlog = async (session) => {
    if (!session) {
      return toast.error('You should login first!');
    } else {
      return router.push(`/blog/user/${session.user.id}`);
    }
  };
  return (
    <div>
      <div>
        <button
          className="btn btn-ghost text-secondary ml-7"
          onClick={() => handleBlog(session)}
        >
          <MdOutlinePostAdd size={25} />
        </button>
      </div>
    </div>
  );
};

export default HandleUserBlog;
