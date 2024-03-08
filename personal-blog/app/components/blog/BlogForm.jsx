'use client';

import Image from 'next/legacy/image';
import { useForm } from 'react-hook-form';
import abstracPic from '@/public/abstrac2.webp';

const BlogForm = ({ isEditing, submit, initialValues }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: initialValues?.data });
  return (
    <>
      <div className="flex flex-row min-h-screen outline text-primary my-10 shadow-xl">
        {isEditing ? (
          <>
            <div className="w-2/6 relative overflow-hidden">
              <div className="image-full bg-base-100 shadow-xl ">
                <Image
                  src={abstracPic}
                  layout="fill"
                  sizes="(max-width: 768px) 100vw"
                  objectFit="cover"
                  alt="blogForm"
                  placeholder="blur"
                  className="rotate-180"
                />
                <div className="absolute inset-0 flex flex-col text-center text-slate-200 items-center justify-center text-2xl z-50 bg-primary opacity-80 ">
                  <h1 className="text-5xl font-bold font-sans mb-10">
                    Change your mind?
                  </h1>
                  <div className="w-3/4">
                    <p className="text-lg font-medium">
                      Customize it according to your preferences and make it
                      uniquely yours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
        <div className="flex flex-col w-4/6 items-center justify-center text-slate-900">
          <h1 className="text-6xl font-sans font-bold mb-10 w-3/4 text-center">
            {isEditing ? 'Modify Your Blog' : ' Create Your Own Blog!'}
          </h1>

          <div className="w-4/6">
            <form onSubmit={handleSubmit(submit)}>
              <div className="w-full mx-auto form-control">
                {' '}
                <label className="label font-medium">Title</label>
                <input
                  className="input bg-primary text-slate-200  rounded-full"
                  placeholder="Start with an attention-grabbing title..."
                  {...register('title', { required: true })}
                />
                {errors.title && (
                  <p className="text-red-600 m-px">Title is required</p>
                )}
                <label className="label font-medium">Content</label>
                <textarea
                  className="textarea bg-primary text-slate-200  rounded-3xl"
                  placeholder="What's on your mind? Elaborate here..."
                  {...register('content', { required: true })}
                />
                {errors.content && (
                  <p className="text-red-600 m-px">Content is required</p>
                )}
                <label className="label font-medium">Category</label>
                <input
                  className="input bg-primary text-slate-200  rounded-full"
                  placeholder="Categorize your post for easy navigation..."
                  {...register('category', { required: true })}
                />
                {errors.category && (
                  <p className="text-red-600 m-px">Category is required</p>
                )}
              </div>
              <div className="flex w-full justify-center">
                <button
                  className="btn btn-primary btn-outline w-1/2 rounded-full text-md mt-8"
                  type="submit"
                >
                  {isEditing ? 'Modify' : 'Create'}
                </button>
              </div>
            </form>
          </div>
        </div>

        {isEditing ? null : (
          <>
            <div className="w-2/6 relative overflow-hidden">
              <div className="image-full bg-base-100 shadow-xl ">
                <Image
                  src={abstracPic}
                  layout="fill"
                  sizes="(max-width: 768px) 100vw"
                  objectFit="cover"
                  alt="blogForm"
                  placeholder="blur"
                />
                <div className="absolute inset-0 flex flex-col text-center text-slate-200 items-center justify-center text-2xl z-50 bg-primary opacity-80 ">
                  <h1 className="text-5xl font-bold font-sans mb-10">
                    Unleash Your Creativity!
                  </h1>
                  <div className="w-3/4">
                    <p className="text-lg font-medium">
                      Express your thoughts freely and share them with the
                      world.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default BlogForm;
