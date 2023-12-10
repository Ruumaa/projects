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
      <button
        className="btn btn-ghost text-secondary ml-7"
        onClick={() => handleAdd(session)}
      >
        <MdOutlinePostAdd size={25} />
      </button>
    </div>
  );
};

export default HandleAddBlog;
