import { format } from 'date-fns';
import { getUsername } from '@/lib/fetch';

const CommentSection = async ({ comment }) => {
  const username = await getUsername(comment.userId);
  const date = new Date(comment.created_at);
  const formattedDate = format(date, 'MMMM dd, yyyy');
  return (
    <div className="flex flex-col justify-center mt-5">
      <div className="card rounded-sm bg-secondary w-full h-fit p-2">
        <div className="flex items-center">
          <h3 className="font-bold text-primary capitalize font-sans">
            {username}
          </h3>
          <p className=" text-slate-300 ml-2">{formattedDate}</p>
        </div>
        <div className="py-2 pr-2">
          <p className=" font-medium">{comment.text}</p>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
