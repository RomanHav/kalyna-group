'use client';
import React from 'react';
import Image from 'next/image';

interface OurStackPartProps {
  id: number;
  title: string;
  path: string;
  activeId: number;
}

const OurStackPart: React.FC<OurStackPartProps> = ({
  id,
  title,
  path,
  activeId,
}) => {
  return (
    <div
      className={`group w-40 h-40 lg:w-64 lg:h-64  rounded-full ${activeId === id ? 'bg-white/80' : 'bg-dash'}  flex justify-center transition-all duration-300 items-center gap-5 flex-col bg-cover bg-center`}
    >
      <Image
        className={`w-20 lg:w-32 ${activeId === id ? 'grayscale-0 brightness-100' : 'grayscale brightness-200'}  transition-all duration-300`}
        src={path}
        alt={title}
        width={500}
        height={500}
      />
      <h4
        className={`text-lg lg:text-2xl ${activeId === id ? 'text-black' : ''}`}
      >
        {title}
      </h4>
    </div>
  );
};
export default OurStackPart;
