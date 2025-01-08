import React from 'react';

interface props {
  title: string;
  description: string;
}

interface HeaderServiceProps {
  headerText: props;
}

const HeaderService: React.FC<HeaderServiceProps> = ({ headerText }) => {
  return (
    <div className="relative mb-[22rem] w-full h-screen flex justify-center">
      <div
        className={
          'relative z-20 flex flex-col justify-center items-center text-white mb-48'
        }
      >
        <h4 className="uppercase text-4xl pb-4 font-semibold">
          {headerText.title}
        </h4>
        <p className={'text-2xl font-extralight pb-7'}>
          {headerText.description} with{' '}
          <span className="uppercase">Kalyna group</span>
        </p>
        <button
          className={
            'font-semibold text-2xl hover:bg-custom-background hover:text-white transition-colors duration-300 bg-white py-2 px-6 uppercase rounded-lg text-black'
          }
        >
          Write Now
        </button>
      </div>
      <div className="absolute w-full flex -top-[100vh] h-[75rem] blur-xl justify-center items-center">
        <div className="absolute z-10 rounded-full w-[1100px] bg-[#031511] h-[1100px]"></div>
        <div className="absolute bg-gradient-to-tl from-[#0A8680] to-[#25982D] rounded-full w-[80rem] h-[80rem]"></div>
      </div>
      <div className="absolute w-[25rem] h-[30rem] rounded-full flex -top-10 -left-40 blur-3xl rotate-45 bg-[#9DFFC2]/30 justify-center items-center"></div>
      <div className="absolute w-[30rem] h-[30rem] rounded-full flex -bottom-10 -right-40 blur-3xl rotate-45 bg-[#6CDAFF]/30 justify-center items-center"></div>
      <div className="absolute w-[30rem] h-[30rem] flex -bottom-10 left-20 blur-3xl rotate-45 bg-[#00B430]/30 justify-center items-center"></div>
    </div>
  );
};

export default HeaderService;
