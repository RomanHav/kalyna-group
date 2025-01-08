import React from 'react';

const OurExpertise = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-36 flex flex-col gap-10">
      <h3 className="text-8xl font-medium uppercase text-[#38EF7D]">
        Our expertise
      </h3>
      <div className="w-full h-[1px] bg-white"></div>
      {children}
      <div className="w-full h-[1px] bg-white"></div>
    </div>
  );
};

export default OurExpertise;
