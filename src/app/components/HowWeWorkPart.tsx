'use client';

import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Image from 'next/image';
import ArrowCases from '@/app/components/ArrowCases';

interface HowWeWorkProps {
  id: number;
  number: string;
  title: string;
  description: string;
  isLast: boolean;
  expandedId: number | false;
  onAccordionChange: (itemId: number) => void;
}

const HowWeWorkPart: React.FC<HowWeWorkProps> = ({
  id,
  number,
  title,
  description,
  isLast,
  onAccordionChange,
  expandedId,
}) => {
  return (
    <div
      className={`flex w-full relative items-center transition-all duration-200 contain-paint ${
        expandedId === id || isLast ? 'h-[247px]' : 'h-[160px]'
      } px-3 border-t-2 border-white`}
    >
      {isLast ? (
        <div>
          <div className="relative mr-8 w-[280px] flex items-center">
            <Image src={number} alt="Number" width={274} height={182}></Image>
          </div>
        </div>
      ) : (
        <div>
          <div className="relative mr-8 w-[280px] flex items-center">
            <Image
              src={number}
              alt="Number"
              width={274}
              height={182}
              className={`absolute delay-150 duration-500 transition-all ease-in ${
                expandedId === id ? '' : '-top-[46px]'
              } ${
                title === 'Introductory call'
                  ? 'max-w-[176px]'
                  : 'max-w-[264px]'
              } transition-all duration-500 uppercase text-[230px] font-extralight`}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-custom-green to-custom-second-green opacity-60"></div>
          </div>
        </div>
      )}

      {isLast ? (
        <span className="text-[40px] bg-gradient-to-r from-custom-green to-custom-second-green bg-clip-text text-transparent">
          Your project is ready to generate income
        </span>
      ) : (
        <Accordion
          expanded={expandedId === id}
          onChange={() => onAccordionChange(id)}
          sx={{
            width: '100%',
            backgroundColor: 'transparent',
            boxShadow: 'none',
            '::before': {
              display: 'none',
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ArrowCases />}
            aria-controls={`panel${id}-content`}
            id={`panel${id}-header`}
            sx={{
              '& .MuiAccordionSummary-content': {
                background: 'linear-gradient(to right, #38EF7D, #C2FAD7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: '40px',
                fontWeight: 'regular',
              },
            }}
          >
            {title}
          </AccordionSummary>
          <AccordionDetails
            sx={{
              backgroundColor: 'transparent',
              color: '#ffff',
              fontSize: '20px',
              fontWeight: 'regular',
              maxWidth: '750px',
            }}
          >
            {description}
          </AccordionDetails>
        </Accordion>
      )}
    </div>
  );
};

export default HowWeWorkPart;
