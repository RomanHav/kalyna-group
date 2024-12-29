import React from 'react';

const OurStack: React.FC = () => {
  return (
    <div className={`w-full relative bg-stack h-screen bg-cover bg-center text-white py-10`}>
      <div className={`absolute w-full h-full inset-0 bg-black/50`}></div>
      <div className={'ml-20'}>
        <h2 className={`text-4xl relative w-[270px] uppercase after:absolute after:-bottom-4 after:left-0 after:w-full after:h-[2px] after:bg-white `}>stack of<br/><span className={`text-[#C2FAD7]`}>technologies</span></h2>
      </div>
    </div>
  );
};

export default OurStack;
