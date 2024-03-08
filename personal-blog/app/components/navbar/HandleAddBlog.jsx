'use client';

import { useRouter } from 'next/navigation';
import { MdOutlinePostAdd } from 'react-icons/md';
import { toast } from 'react-toastify';

const HandleAddBlog = ({ session }) => {
  const router = useRouter();
  const handleAdd = async (session) => {
    if (!session) {
      return toast.error('You should login first!');
    } else {
      return router.push('/blog/create');
    }
  };
  return (
    <div>
      <div
        className="text-secondary flex items-center font-semibold gap-3"
        onClick={() => handleAdd(session)}
      >
        <MdOutlinePostAdd size={25} /> Add Blog
      </div>
    </div>
  );
};

export default HandleAddBlog;
