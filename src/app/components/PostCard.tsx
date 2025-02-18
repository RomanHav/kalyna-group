import React from 'react';
import Image from 'next/image';

interface PostCardProps {
  images: string[];
  description: string;
}

const PostCard: React.FC<PostCardProps> = ({ images, description }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white">
      <div className="grid grid-cols-2 gap-2">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt="Post Image"
            className="rounded w-full h-32 object-cover"
            width={400}
            height={400}
          />
        ))}
      </div>
      <p className="text-gray-700 mt-3">{description}</p>
    </div>
  );
};

export default PostCard;
