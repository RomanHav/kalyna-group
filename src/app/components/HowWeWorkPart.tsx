'use client';

import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { BsArrowDownCircle } from 'react-icons/bs';
import Image from 'next/image';

interface HowWeWorkProps {
  number: string;
  title: string;
  description: string;
  isLast: boolean;
}

const HowWeWorkPart: React.FC<HowWeWorkProps> = ({
  number,
  title,
  description,
  isLast,
}) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const [height, setHeight] = useState(false);

  const handleAccordionChange = (
    event: React.SyntheticEvent,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded);
    setHeight(!height);
  };

  return (
    <div
      className={`flex w-full relative items-center transition-all duration-200 contain-paint ${height ? 'h-[247px]' : 'h-[160px]'} px-3 ${isLast === true ? 'border-b-2' : ''} border-t-2 border-white`}
    >
      <div className="">
        <div className={`relative mr-8 w-[280px] flex items-center`}>
          <Image
            src={number}
            alt="Number"
            width={274}
            height={182}
            className={`absolute delay-100 duration-500 transition-all ease-in ${height ? '' : '-top-[46px]'} ${title === 'Introductory call' ? 'max-w-[176px]' : 'max-w-[264px]'} transition-all duration-500 uppercase text-[230px] font-extralight`}
          ></Image>
          <div className="absolute inset-0 bg-gradient-to-r from-custom-green to-custom-second-green opacity-60"></div>
        </div>
      </div>
      {isLast === true ? (
        <span className="text-[40px] bg-gradient-to-r from-custom-green to-custom-second-green bg-clip-text text-transparent">
          Your project is ready to generate income
        </span>
      ) : (
        <Accordion
          sx={{
            backgroundColor: 'transparent',
            boxShadow: 'none',
          }}
          onChange={handleAccordionChange}
          slotProps={{ heading: { component: 'h4' } }}
        >
          <AccordionSummary
            expandIcon={
              <BsArrowDownCircle
                color="white"
                size={60}
                style={{
                  transform: expanded ? 'rotate(180deg)' : 'rotate(270deg)',
                  transition: 'transform 0.3s ease',
                }}
              />
            }
            aria-controls="panel1-content"
            id="panel1-header"
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
