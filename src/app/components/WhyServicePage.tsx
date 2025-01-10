import WhyServicePagePart from './WhyServicePagePart';
import React from 'react';

interface WhyServiceProps {
  title: string;
  description: string;
}

interface WhyServiceObjectProps {
  id: number;
  title: string;
  description: string;
  number: string;
  src: string;
}

interface WhyServicePageProps {
  whyService: WhyServiceProps;
  whyServiceObject: WhyServiceObjectProps[];
}

const WhyServicePage: React.FC<WhyServicePageProps> = ({
  whyService,
  whyServiceObject,
}) => {
  return (
    <div className="flex justify-between px-36">
      <div className="w-1/2 flex flex-col gap-16">
        <h3 className="text-5xl leading-[1.25] w-[420px] font-medium text-[#38EF7D]">
          {whyService.title}
        </h3>
        <p className="font-base w-[530px] italic text-2xl text-white">
          {whyService.description}
        </p>
      </div>
      <ul className="relative w-1/2 flex flex-wrap justify-end items-center text-white">
        <li
          className={
            'absolute w-[1px] h-full bg-gradient-to-b from-transparent via-white to-transparent left-0 top-0'
          }
        ></li>
        {whyServiceObject.map(part => {
          return (
            <li
              key={part.id}
              className={`flex ${part.id === 1 || part.id === 4 || part.id === 5 ? 'items-end' : ''} w-1/2 h-[260px]`}
            >
              <WhyServicePagePart
                id={part.id}
                title={part.title}
                description={part.description}
                number={part.number}
                src={part.src}
              />
            </li>
          );
        })}
        <li
          className={
            'absolute w-[1px] h-full bg-gradient-to-b from-transparent via-white to-transparent left-1/2 top-0'
          }
        ></li>
        <li
          className={
            'absolute w-[1px] h-full bg-gradient-to-b from-transparent via-white to-transparent right-0 top-0'
          }
        ></li>
        <li
          className={
            'absolute h-[1px] w-full bg-gradient-to-r from-transparent via-white to-transparent left-0 top-1/3'
          }
        ></li>
        <li
          className={
            'absolute h-[1px] w-full bg-gradient-to-r from-transparent via-white to-transparent left-0 top-2/3'
          }
        ></li>
      </ul>
    </div>
  );
};

export default WhyServicePage;
