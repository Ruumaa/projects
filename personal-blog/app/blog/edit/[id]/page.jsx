import EditBlog from '@/app/components/blog/EditBlog';
import { authOptions } from '@/lib/auth';
import { getBlogById } from '@/lib/fetch';
import { getServerSession } from 'next-auth';

const page = async ({ params }) => {
  const session = await getServerSession(authOptions);
  const id = params.id;
  const blogData = await getBlogById(id);

  return (
    <div>
      <EditBlog id={id} userId={session.user.id} blogData={blogData} />
    </div>
  );
};

export default page;
