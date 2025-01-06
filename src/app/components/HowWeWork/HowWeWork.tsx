'use client';
import howWeWork from '../../../../howWeWork.json';
import HowWeWorkPart from './HowWeWorkPart';
import React, { useState } from 'react';

const HowWeWork = () => {
  const [expandedId, setExpandedId] = useState<number | false>(1);
  const handleAccordionChange = (itemId: number) => {
    setExpandedId(expandedId === itemId ? false : itemId);
  };
  return (
    <div className="my-14 py-16 relative text-white">
      <div className="absolute z-10 top-0 left-0 w-full h-full bg-black opacity-45"></div>
      <div className="relative z-20 px-4 lg:px-20">
        <h3 className="uppercase text-4xl md:text-5xl mb-20">
          How are we work?
        </h3>
        <ul className="flex w-full flex-col">
          {howWeWork.map(part => {
            return (
              <li key={part.id}>
                <HowWeWorkPart
                  id={part.id}
                  number={part.number}
                  title={part.title}
                  description={part.description}
                  isLast={part.isLast}
                  expandedId={expandedId}
                  onAccordionChange={handleAccordionChange}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default HowWeWork;
