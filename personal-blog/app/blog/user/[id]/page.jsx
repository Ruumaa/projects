import BlogCardUser from '@/app/components/blog/BlogCardUser';
import { getBlogUser } from '@/lib/fetch';
import React from 'react';

const page = async ({ params }) => {
  const id = params.id;
  const blogs = await getBlogUser(id);

  return (
    <div className="grid grid-cols-1 gap-10 mt-20 mb-20">
      {blogs.data.map((blog) => (
        <BlogCardUser key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default page;
