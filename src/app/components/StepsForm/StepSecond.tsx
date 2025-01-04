'use client';
import React, { useState } from 'react';
import services from '../../../../serviceInfo.json';

export interface StepSecondProps {
  title: string;
  description: string;
}

const StepSecond: React.FC<StepSecondProps> = ({ title, description }) => {
  const [active, setActive] = useState<number[]>([]);
  const handleClick = (id: number) => {
    setActive(prevActive =>
      prevActive.includes(id)
        ? prevActive.filter(activeId => activeId !== id)
        : [...prevActive, id]
    );
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col">
        <h3 className="text-3xl font-medium mb-2">{title}</h3>
        <span className="mb-6 min-h-[48px]">{description}</span>
        <div className="w-full h-[1px] bg-[#C0FFD8]"></div>
      </div>
      <div className="min-h-[270px] flex items-center">
        <ul className="flex flex-wrap gap-10 justify-center">
          {services.map(service => (
            <li
              key={service.id}
              className={`cursor-pointer flex justify-between border ${
                active.includes(service.id)
                  ? 'border-[#38EF7D] text-white font-medium'
                  : 'border-white/60 text-white/60'
              } px-4 py-3 rounded-lg min-w-52`}
              onClick={() => handleClick(service.id)}
            >
              <span>{service.id}</span>
              <p>{service.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StepSecond;
