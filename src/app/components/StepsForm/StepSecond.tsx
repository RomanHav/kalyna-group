'use client';
import React, { useState, useEffect } from 'react';
import services from '../../../../serviceInfo.json';
import { useFormikContext } from 'formik';

export interface StepSecondProps {
  title: string;
  description: string;
}

const StepSecond: React.FC<StepSecondProps> = ({ title, description }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { values, setFieldValue } = useFormikContext<{ services: string[] }>();

  const [active, setActive] = useState<string[]>(() => {
    return JSON.parse(window.localStorage.getItem('services') || '[]');
  });

  useEffect(() => {
    setFieldValue('services', active);
  }, [active, setFieldValue]);

  const handleClick = (serviceTitle: string) => {
    const updatedActive = active.includes(serviceTitle)
      ? active.filter(activeTitle => activeTitle !== serviceTitle)
      : [...active, serviceTitle];

    setActive(updatedActive);
    window.localStorage.setItem('services', JSON.stringify(updatedActive));
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
                active.includes(service.title)
                  ? 'border-[#38EF7D] text-white font-medium'
                  : 'border-white/60 text-white/60'
              } px-4 py-3 rounded-lg min-w-52`}
              onClick={() => handleClick(service.title)}
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
