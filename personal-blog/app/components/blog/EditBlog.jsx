'use client';
import { toast } from 'react-toastify';
import BlogForm from './BlogForm';
import { base_url } from '@/lib/base_url';
import { useRouter } from 'next/navigation';

const EditBlog = ({ id, userId, blogData }) => {
  const router = useRouter();
  const handleEdit = async (values) => {
    const response = await fetch(`${base_url}/api/blog/${id}`, {
      method: 'PATCH',
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
    <div>
      <BlogForm isEditing={true} submit={handleEdit} initialValues={blogData} />
    </div>
  );
};

export default EditBlog;
