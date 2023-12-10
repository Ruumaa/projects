'use client';
import { base_url } from '@/lib/base_url';
import BlogForm from './BlogForm';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const CreateBlog = ({ userId, username }) => {
  const router = useRouter();
  const handleCreate = async (values) => {
    const response = await fetch(`${base_url}/api/blog/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: values.title,
        content: values.content,
        category: values.category,
        userId: userId,
      }),
    });
    const result = await response.json();
    if (response.ok) {
      toast.success(`${result.message}`);
      router.push('/');
      router.refresh();
    } else {
      toast.error(`${result.message}`);
    }
  };
  return (
    <>
      <BlogForm isEditing={false} submit={handleCreate} />
    </>
  );
};

export default CreateBlog;
