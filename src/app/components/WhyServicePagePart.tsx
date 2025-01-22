import React from 'react';
import Image from 'next/image';

interface WhyServicePagePartProps {
  id: number;
  title: string;
  description: string;
  number: string;
  src: string;
}

function _renderWhyServiceList({
  id,
  title,
  description,
  number,
  src,
}: WhyServicePagePartProps) {
  switch (id) {
    case 1:
    case 4:
    case 5:
      return (
        <div className="px-5 py-4 w-full h-full flex flex-col justify-end">
          <p className="font-light italic">{description}</p>
        </div>
      );
    default:
      return (
        <div className="flex flex-col justify-between w-full h-full">
          <div className="flex justify-between items-center px-5 py-4">
            <h4 className="text-base md:text-xl lg:text-lg xl:text-xl font-medium whitespace-pre">{title}</h4>
            <span className="text-xl md:text-4xl lg:text-3xl xl:text-4xl font-medium">{number}</span>
          </div>
          <Image
            className={'w-full h-[160px] md:h-[200px] lg:h-[160px] object-cover'}
            src={src}
            alt={title}
            width={1280}
            height={1000}
          />
        </div>
      );
  }
}

const WhyServicePagePart: React.FC<WhyServicePagePartProps> = props => {
  return _renderWhyServiceList(props);
};

export default WhyServicePagePart;
