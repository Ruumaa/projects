import { getUsername } from '@/lib/fetch';
import Link from 'next/link';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { IoArrowForwardCircle } from 'react-icons/io5';
const BlogCard = async ({ blog }) => {
  const author = await getUsername(blog.userId);
  return (
    <>
      <div className="card w-full shadow-xl bg-accent text-white rounded p-6">
        <div className="flex justify-between items-center">
          {/* Title */}
          <h1 className="card-title text-3xl truncate">{blog.title}</h1>
          {/* Category */}
          <div className="badge badge-info font-semibold">#{blog.category}</div>
        </div>
        <p className="text-sm font-sans italic text-slate-200">
          Written by <span className="capitalize">{author}</span>
        </p>
        {/* Content */}
        <p className="line-clamp-3 hover:text-clip mt-4 ">{blog.content}</p>
        <div className="divider -my-1px divider-primary"></div>
        <div className="flex items-center justify-between">
          <Link href={`/blog/${blog.id}`}>
            <div className="flex hover:text-info gap-2">
              <h3 className="font-semibold cursor-pointer">Read more</h3>
              <IoArrowForwardCircle size={25} className="text-secondary" />
            </div>
          </Link>
          <Link href={`/blog/${blog.id}`}>
            <div className="indicator hover:text-info">
              <span className="indicator-item badge badge-sm badge-secondary font-semibold">
                {blog.Comment.length}
              </span>
              <BiMessageSquareDetail size={30} />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
