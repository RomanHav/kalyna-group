'use client';
import React from 'react';
import { usePathname } from 'next/navigation';

interface props {
  title: string;
  description: string;
}

interface HeaderServiceProps {
  headerText: props;
}

const _renderClassname = (path: string) => {
  switch (path) {
    case '/services/3d-design':
      return 'mb-32 md:mb-36 lg:mb-[26rem]';
    case '/services/landing-page':
      return 'mb-32 md:mb-8';
    case '/services/crm-system':
      return 'mb-[540px] lg:mb-[500px] xl:mb-[400px]';
    case '/services/ui-ux-design':
      return 'mb-32 lg:mb-[400px] xl:mb-[500px]';
    case '/services/business-website':
      return 'mb-20 lg:mb-[18rem]';
    default:
      return 'mb-60';
  }
};

const HeaderService: React.FC<HeaderServiceProps> = ({ headerText }) => {
  const pathname = usePathname();
  return (
    <div
      className={`relative ${_renderClassname(pathname)} md:mb-0 lg:mb-[22rem] w-full h-[calc(100vh-150px)] md:min-h-[900px] lg:min-h-screen flex justify-center`}
    >
      <div
        className={
          'relative z-20 text-balance text-center lg:text-nowrap flex flex-col justify-center items-center text-white mx-10 max-h-[450px] lg:max-h-[520px] xl:mb-48'
        }
      >
        <h4 className="uppercase text-2xl md:text-3xl lg:text-4xl pb-4 font-semibold ">
          {headerText.title}
        </h4>
        <p className={'text-lg md:text-xl lg:text-2xl font-extralight pb-7'}>
          {headerText.description} with{' '}
          <span className="uppercase">Kalyna group</span>
        </p>
        <button
          className={
            'font-semibold text-lg md:text-xl lg:text-2xl hover:bg-custom-background hover:text-white transition-colors duration-300 bg-white py-2 px-6 uppercase rounded-lg text-black'
          }
        >
          Write Now
        </button>
      </div>
      <div className="absolute w-full flex h-[30rem] -top-40 lg:-top-[100vh] lg:h-[75rem] blur-md lg:blur-xl justify-center items-center">
        <div className="absolute z-10 rounded-full w-[270px] h-[270px] md:w-[650px] md:h-[650px] lg:w-[1100px] bg-[#031511] lg:h-[1100px]"></div>
        <div className="absolute bg-gradient-to-tl from-[#0A8680] to-[#25982D] rounded-full w-[350px] h-[350px] md:w-[740px] md:h-[740px] lg:w-[80rem] lg:h-[80rem]"></div>
      </div>
      <div className="absolute w-64 h-72  lg:w-[25rem] lg:h-[30rem] rounded-full flex -top-10 -left-20 lg:-left-40 blur-3xl rotate-45 bg-[#9DFFC2]/30 justify-center items-center"></div>
      <div className="absolute w-60 h-60 md:w-[25rem] md:h-[25rem] lg:w-[30rem] lg:h-[30rem] rounded-full flex -bottom-14 md:bottom-56 lg:-bottom-10 -right-20 lg:-right-40 blur-3xl rotate-45 bg-[#6CDAFF]/30 justify-center items-center"></div>
      <div className="absolute w-64 h-72 md:w-[25rem] md:h-[28rem] lg:w-[30rem] lg:h-[30rem] flex -bottom-16 md:bottom-56 lg:-bottom-10 -left-5 lg:left-20 blur-3xl rotate-45 bg-[#00B430]/30 justify-center items-center"></div>
    </div>
  );
};

export default HeaderService;
