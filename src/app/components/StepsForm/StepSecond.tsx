import React, { useState, useEffect } from 'react';
import services from '../../../../mainPageInfo/serviceInfo.json';
import { useFormikContext } from 'formik';

export interface StepSecondProps {
  title: string;
  description: string;
  error?: boolean;
  isModal?: boolean;
}

const StepSecond: React.FC<StepSecondProps> = ({
  title,
  description,
  error,
  isModal,
}) => {
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  const { values, setFieldValue } = useFormikContext<{ services: string[] }>();
  const [active, setActive] = useState<string[]>(() => {
    if (typeof window === 'undefined') return [];
    const storedServices = window.localStorage.getItem('services');
    return storedServices ? JSON.parse(storedServices) : [];
  });

  useEffect(() => {
    setFieldValue('services', active);
  }, [active, setFieldValue]);

  const handleClick = (serviceTitle: string) => {
    const updatedActive = active.includes(serviceTitle)
      ? active.filter(activeTitle => activeTitle !== serviceTitle)
      : [...active, serviceTitle];

    setActive(updatedActive);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('services', JSON.stringify(updatedActive));
    }
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col">
        <h3 className="text-2xl lg:text-3xl font-medium mb-5 lg:mb-2">{title}</h3>
        <span className="mb-3 lg:mb-6 min-h-[48px]">{description}</span>
        <div className="w-full h-[1px] bg-[#C0FFD8]"></div>
      </div>

      <div
        className={`min-h-[186px] md:min-h-[220px] ${isModal ? 'lg:min-h-[150px]' : 'lg:min-h-[270px]'} flex items-center`}
      >
        <ul
          className={`max-md:overflow-y-scroll max-md:h-[150px] gap-4 md:gap-6 lg:gap-10 flex flex-wrap justify-center`}
        >
          {services.map(service => (
            <li
              key={service.id}
              className={`cursor-pointer flex justify-between border px-4 py-3 rounded-lg min-w-52 ${
                active.includes(service.title)
                  ? 'border-[#38EF7D] text-white font-medium'
                  : 'border-white/60 text-white/60'
              }`}
              onClick={() => handleClick(service.title)}
            >
              <span>{service.id}</span>
              <p>{service.title}</p>
            </li>
          ))}
        </ul>
      </div>
      {error && (
        <div className="text-red-500 mt-2">
          Please select at least one service before proceeding.
        </div>
      )}
    </div>
  );
};

export default StepSecond;
