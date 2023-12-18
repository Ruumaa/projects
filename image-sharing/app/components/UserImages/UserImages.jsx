'use client';
import { deleteUserImages } from '@/lib/fetch';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-toastify';

const UserImages = ({ images }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleDelete = async (id) => {
    try {
      setIsLoading(true);
      const response = await deleteUserImages(id);
      if (response.error) {
        toast.error('Something went wrong');
        console.error(response.error);
      } else {
        toast.success('Delete image success');
        setIsOpen(false);
        router.refresh();
      }
    } catch (error) {
      console.error('Error during deleting:', error);
      toast.error('An error occurred while processing your request.');
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      <div className="max-w-7xl m-8 grid grid-cols-4 gap-4 ">
        {images.map((image, index) => (
          <div key={index} className="w-full h-80 relative">
            <div
              className="absolute top-0 right-0 m-2 p-2 cursor-pointer opacity-50 transition-opacity duration-300 hover:opacity-100"
              // onClick={() => handleModal(image.id)}
              onClick={handleModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-error"
              >
                <path
                  fillRule="evenodd"
                  d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                  clipRule="evenodd"
                />
              </svg>

              {/* ----------- MODAL ----------------- */}

              <div className={isOpen ? 'modal modal-open' : 'modal'}>
                <div className="bg-base-100 rounded-md p-8">
                  <h3 className="font-bold text-lg">
                    Are you sure delete this image?
                  </h3>
                  <div className="modal-action gap-3">
                    <button
                      type="button"
                      className="btn btn-error hover:bg-red-600"
                      onClick={() => handleDelete(image.id)}
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <span className="loading loading-spinner loading-sm"></span>
                          Deleting...
                        </>
                      ) : (
                        'Delete'
                      )}
                    </button>
                    <button
                      type="button"
                      className="btn btn-base-100"
                      onClick={handleModal}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <Image
              key={image.id}
              alt="gallery"
              src={image.imageUrl}
              sizes="100vw"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
              className="rounded-lg shadow-lg border"
              width={500}
              height={300}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserImages;
