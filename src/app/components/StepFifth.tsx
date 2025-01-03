import React from 'react';

interface StepFifth {
  title: string;
  description: string;
}

const StepFifth: React.FC<StepFifth> = ({ title, description }) => {
  return (
    <div>
      <div className={`flex flex-col`}>
        <h3 className={`text-3xl font-medium mb-2`}>{title}</h3>
        <span className={`mb-6 pr-5`}>{description}</span>
        <div className={`w-full h-[1px] bg-[#C0FFD8]`}></div>
      </div>
    </div>
  );
};

export default StepFifth;
