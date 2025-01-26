import React from 'react';
import WhyServicePagePart from './WhyServicePagePart';

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
  whyServiceObject: WhyServiceObjectProps[][];
}

const WhyServicePage: React.FC<WhyServicePageProps> = ({
  whyService,
  whyServiceObject,
}) => {
  return (
    <div className="flex flex-col gap-16 lg:gap-0 lg:flex-row justify-between px-0 lg:px-20 xl:px-36">
      {/* Title and Description */}
      <div className="w-full lg:w-1/2 flex flex-col gap-8 md:gap-16 px-10 md:px-20 lg:px-0">
        <h3 className="text-4xl md:text-5xl leading-[1.25] lg:leading-[1.3] xl:leading-[1.25] lg:w-[420px] font-medium text-[#38EF7D]">
          {whyService.title}
        </h3>
        <p className="font-base w-full xl:w-[470px] min-[1440px]:w-[530px] italic text-xl md:text-2xl text-white">
          {whyService.description}
        </p>
      </div>

      {/* Render 3 <ul> elements */}
      <ul className="relative w-full lg:w-1/2 list-none flex flex-wrap justify-end items-center text-white">
        {[0, 1, 2].map(groupIndex => (
          <ul
            key={groupIndex}
            className={`relative flex w-full list-none ${groupIndex !== 2 && 'after:absolute after:h-[1px] after:w-full after:bg-gradient-to-r after:from-transparent after:via-white after:to-transparent after:left-0 after:bottom-0'}`}
          >
            {whyServiceObject[groupIndex]?.map(item => (
              <li key={item.id} className={'w-1/2'}>
                <WhyServicePagePart
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  number={item.number}
                  src={item.src}
                />
              </li>
            ))}
          </ul>
        ))}

        <li
          className={
            'absolute w-[1px] h-full bg-gradient-to-b from-transparent via-white to-transparent left-1/2 top-0'
          }
        ></li>
        <li
          className={
            'absolute w-[1px] h-full bg-gradient-to-b from-transparent via-white to-transparent left-0 top-0'
          }
        ></li>
        <li
          className={
            'absolute w-[1px] h-full bg-gradient-to-b from-transparent via-white to-transparent right-0 top-0'
          }
        ></li>
        {/*<li*/}
        {/*  className={*/}
        {/*    'absolute h-[1px] w-full bg-gradient-to-r from-transparent via-white to-transparent left-0 top-1/3'*/}
        {/*  }*/}
        {/*></li>*/}
      </ul>
    </div>
  );
};

export default WhyServicePage;
