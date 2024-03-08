'use client';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { CgList } from 'react-icons/cg';

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
      <div
        className="text-secondary flex items-center font-semibold gap-3"
        onClick={() => handleBlog(session)}
      >
        <CgList size={25} /> My Blogs
      </div>
    </div>
  );
};

export default HandleUserBlog;
