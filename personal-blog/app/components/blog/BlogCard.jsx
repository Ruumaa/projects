import { getUsername } from '@/lib/fetch';
import Link from 'next/link';
import { BiMessageSquareDetail, BiSolidErrorCircle } from 'react-icons/bi';
import { IoArrowForwardCircle } from 'react-icons/io5';
import CommentSection from './CommentSection';
import HandleAddComment from './handleAddComment';
const BlogCard = async ({ blog, isComment, session }) => {
  const author = await getUsername(blog.userId);
  return (
    <>
      <div className="card w-full shadow-xl bg-accent text-white rounded p-6">
        <div className="flex justify-between items-center">
          {/* Title */}
          <h1 className="card-title text-3xl line-clamp-1">{blog.title}</h1>
          {/* Category */}
          <div className="badge badge-info font-semibold">#{blog.category}</div>
        </div>
        <p className="text-sm font-sans italic text-slate-200">
          Written by <span className="capitalize">{author}</span>
        </p>
        {/* Content */}
        <p className="line-clamp-2 hover:text-clip mt-4 ">{blog.content}</p>
        <div className="divider -my-1px divider-primary"></div>
        {isComment ? (
          <>
            <div>
              <h1 className="flex items-center text-3xl font-semibold text-white">
                Comments <BiMessageSquareDetail className="text-secondary" />
              </h1>
              {blog.Comment.length === 0 ? (
                <div>
                  {' '}
                  <div className="flex items-center my-5">
                    <h1 className="text-xl font-mono font-semibold flex gap-5">
                      <BiSolidErrorCircle size={30} /> No one has comment yet.
                      Be the first one!
                    </h1>
                  </div>
                </div>
              ) : (
                ''
              )}
            </div>
            {blog.Comment.map((comment) => (
              <CommentSection comment={comment} key={comment.id} />
            ))}
            <HandleAddComment session={session} blog={blog} />
          </>
        ) : (
          <div className="flex items-center justify-between">
            <Link href={`/blog/${blog.id}`}>
              <div className="flex hover:text-info gap-2">
                <h3 className="font-semibold cursor-pointer font-mono">
                  Read more
                </h3>
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
        )}
      </div>
    </>
  );
};

export default BlogCard;
