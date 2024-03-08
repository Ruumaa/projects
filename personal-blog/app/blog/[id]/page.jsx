import BlogCard from '@/app/components/blog/BlogCard';
import { authOptions } from '@/lib/auth';
import { getBlogById } from '@/lib/fetch';
import { getServerSession } from 'next-auth';

const page = async ({ params }) => {
  const session = await getServerSession(authOptions);
  const id = params.id;
  const blog = await getBlogById(id);
  return (
    <div className="flex flex-col mt-16 items-center mx-auto w-5/6">
      <BlogCard blog={blog.data} isComment={true} session={session} />
    </div>
  );
};

export default page;
