import React from 'react';
import Image from 'next/image';

interface Steps {
  name: string;
  image: string;
  activeId: number;
  id: number;
}

const Steps: React.FC<Steps> = ({ name, image, activeId, id }) => {

  return (
    <div className={`flex items-center justify-end gap-6`}>
      <span className={`font-medium text-lg`}>{name}</span>
      <div
        className={`${activeId === id ? 'bg-[#38A963]' : 'bg-[#393939]'} flex items-center justify-center rounded-full p-3.5`}
      >
        <Image src={image} alt={'Step image'} width={35} height={35} />
      </div>
    </div>
  );
};

export default Steps;
