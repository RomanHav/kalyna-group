import React, { useState } from 'react';
import Image from 'next/image';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import { LuTrash2 } from 'react-icons/lu';
import DeleteModal from '@/app/components/DeleteModal';
import PostEditForm from '@/app/components/PostEditForm';

interface PostCardProps {
  id?: string;
  images: string[];
  description: string;
  link: string;
  onDelete?: () => void;
}

const PostCard: React.FC<PostCardProps> = ({
  id,
  images,
  description,
  link,
  onDelete,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const handleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleUpdate = () => {
    setEditMode(false);
  };

  return (
    <>
      <div className="border max-w-[290px] flex flex-col gap-4 items-end rounded-lg shadow-md p-4 bg-white">
        {editMode ? (
          <PostEditForm
            post={{ id, images, description, link }}
            onUpdatePost={handleUpdate}
            onEdit={handleEditMode}
          />
        ) : (
          <>
            <div className="flex flex-col gap-2">
              <div className="grid grid-cols-3 gap-2">
                {images.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    alt="Post Image"
                    className="rounded w-20 h-20 object-cover"
                    width={400}
                    height={400}
                  />
                ))}
              </div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={link}
                className="text-gray-700 mt-3"
              >
                {description}
              </a>
            </div>
            <div className="flex gap-1">
              <button
                className="rounded-full bg-transparent transition-all duration-300 hover:bg-[#E6E6E6] p-2"
                onClick={handleEditMode}
              >
                <HiOutlinePencilAlt size={32} color={'#1B3431'} />
              </button>
              <button
                className="rounded-full bg-transparent transition-all duration-300 hover:bg-[#E6E6E6] p-2"
                onClick={handleClick}
              >
                <LuTrash2 size={32} color={'#FF5151'} />
              </button>
            </div>
          </>
        )}
      </div>
      {click && <DeleteModal handleClick={handleClick} onDelete={onDelete} />}
    </>
  );
};

export default PostCard;
