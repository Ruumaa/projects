import { BiSolidErrorCircle } from 'react-icons/bi';

const NotFound = () => {
  return (
    <div className="flex items-center h-screen justify-center">
      <h1 className="text-5xl font-mono font-semibold flex text-center gap-5">
        <BiSolidErrorCircle size={100} /> Blogs are not found! <br /> Go make it
        right now for free!
      </h1>
    </div>
  );
};

export default NotFound;
