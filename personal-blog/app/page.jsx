import { base_url } from '@/lib/base_url';
import BlogCard from './components/blog/BlogCard';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export default async function Home() {
  const session = await getServerSession(authOptions);
  const response = await fetch(`${base_url}/api/blog`, { cache: 'no-store' });
  const blogs = await response.json();
  return (
    <div className="w-full h-full">
      <div className="w-3/4 my-10">
        <h1 className="text-6xl font-semibold">
          Transforming Ideas into Impact with{' '}
          <span className="text-secondary font-bold font-serif">Blog</span>
          <span className="font-serif">App</span>
        </h1>
        <p className="text-lg mt-5">
          Connecting Writers and Readers: Delving into the Social Dimension of
          BlogApp&apos;s Community Features, Networking Opportunities, and
          Interactive Engagement
        </p>
      </div>
      <div className="divider mb-10"></div>
      <div className="grid grid-cols-2 w-full gap-5 mb-10">
        {blogs.data.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}
