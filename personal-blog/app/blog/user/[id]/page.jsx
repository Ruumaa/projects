import BlogCardUser from '@/app/components/blog/BlogCardUser';
import NotFound from '@/app/components/blog/NotFound';
import { getBlogUser } from '@/lib/fetch';
import React from 'react';

const page = async ({ params }) => {
  const id = params.id;
  const blogs = await getBlogUser(id);

  if (blogs.data.length === 0) {
    return <NotFound />;
  }

  return (
    <div className="flex flex-col gap-10 my-20">
      {blogs.data.map((blog) => (
        <BlogCardUser key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default page;
