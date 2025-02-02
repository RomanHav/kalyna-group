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
    <div className={`flex flex-col pb-5 lg:pb-0 lg:flex-row items-center justify-end gap-6`}>
      <span className={`font-medium hidden xl:block xl:text-base min-[1440px]:text-lg`}>{name}</span>
      <div
        className={`${activeId === id ? 'bg-[#38A963]' : 'bg-[#393939]'} flex items-center justify-center rounded-full p-2 md:p-3.5`}
      >
        <Image className={`w-[28px] h-[28px]`} src={image} alt={'Step image'} width={35} height={35} />
      </div>
    </div>
  );
};

export default Steps;
