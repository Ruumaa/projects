'use client';
import { base_url } from '@/lib/base_url';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-toastify';

const HandleAddComment = ({ session, blog }) => {
  const router = useRouter();
  const [comment, setComment] = useState('');
  const handleComment = (e) => {
    setComment(e.target.value);
  };
  const handleSubmit = async (session) => {
    if (!session) {
      return toast.error('You should login first!');
    }

    const trimmedComment = comment.trim();

    if (trimmedComment === '') {
      toast.error('Comment cannot be only spaces');
      return;
    }

    try {
      const response = await fetch(`${base_url}/api/comment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          text: comment,
          userId: session.user.id,
          blogId: blog.id,
        }),
      });
      const result = await response.json();
      if (response.ok) {
        toast.success(`${result.message}`);
        router.refresh();
      } else {
        toast.error('Submit comment failed');
      }
    } catch (error) {
      console.error('Error submitting comment', error);
    }
  };
  return (
    <div className="mt-5">
      <label className="text-xl font-semibold">Add Comment</label>
      <div className="flex items-center mt-3">
        <input
          type="text"
          value={comment}
          onChange={handleComment}
          placeholder="Leave your thought here..."
          className="w-5/6 input input-bordered input-md font-medium bg-slate-500"
        />
        <button
          //   disabled={!session}
          onClick={() => handleSubmit(session)}
          className="btn btn-outline btn-info ml-auto text-white"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default HandleAddComment;
