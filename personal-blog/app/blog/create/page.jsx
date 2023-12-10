import CreateBlog from '@/app/components/blog/CreateBlog';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
const page = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <CreateBlog userId={session.user.id} username={session.user.name} />
    </div>
  );
};

export default page;
