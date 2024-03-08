'use client';
import { base_url } from '@/lib/base_url';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { toast } from 'react-toastify';

const DeleteBlog = ({ id, title }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const handleModal = () => {
    setOpen(!open);
  };
  const handleDelete = async (id) => {
    await fetch(`${base_url}/api/blog/${id}`, { method: 'DELETE' });
    toast.success('Delete blog success');
    router.refresh();
    setOpen(false);
  };
  return (
    <div>
      <MdDeleteForever
        size={30}
        className="text-red-600 hover:text-red-500"
        onClick={handleModal}
      />
      <div className={open ? 'modal modal-open' : 'modal'}>
        <div className="modal-box bg-accent">
          <h3 className="font-bold text-lg">
            Are you sure to delete <span className="capitalize">{title}</span>
          </h3>
          <div className="modal-action gap-3">
            <button type="button" className="btn" onClick={handleModal}>
              No
            </button>
            <button
              type="button"
              className="btn btn-error"
              onClick={() => handleDelete(id)}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteBlog;
