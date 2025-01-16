'use client';

import { useState } from 'react';
import careerFaq from '../../../../careerFaq.json';
import CareerFaqPart from './CareerFaqPart';

const CareerFaq = () => {
  const [expandedId, setExpandedId] = useState<number | false>(1);
  const handleAccordionChange = (itemId: number) => {
    setExpandedId(expandedId === itemId ? false : itemId);
  };
  return (
    <div className="flex flex-col gap-14 px-24">
      <h3 className="uppercase text-center text-5xl font-semibold bg-gradient-to-r from-[#FFFFFF] to-[#38EF7D] bg-clip-text text-transparent">
        Frequently Asked Questions
      </h3>
      <ul className="flex flex-col gap-5 min-h-[570px]">
        {careerFaq.map(part => {
          return (
            <li key={part.id} className='px-40 py-5 bg-[#A3FFEB]/20 rounded-3xl'>
              <CareerFaqPart
                id={part.id}
                title={part.title}
                description={part.description}
                expandedId={expandedId}
                onAccordionChange={handleAccordionChange}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CareerFaq;
