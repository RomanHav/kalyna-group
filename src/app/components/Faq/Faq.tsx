'use client';

import Image from 'next/image';
import css from './Faq.module.css';
import FaqPart from './FaqPart';
import React, { useState } from 'react';

interface FaqCard {
  title: string;
  src: string;
  price: string;
  terms: string;
}

interface FaqItem {
  id: number;
  title: string;
  description: string;
}

interface CommerceFaqProps {
  faqCard: FaqCard;
  commerceFaq: FaqItem[];
}

const Faq: React.FC<CommerceFaqProps> = ({ faqCard, commerceFaq }) => {
  const [expandedId, setExpandedId] = useState<number | false>(1);
  const handleAccordionChange = (itemId: number) => {
    setExpandedId(expandedId === itemId ? false : itemId);
  };
  return (
    <div className="flex h-[780px] justify-between items-center px-36">
      <div className="w-1/2 pr-24">
        <h3 className="text-6xl mb-12 font-medium uppercase text-center text-white">
          Faq
        </h3>
        <ul className="flex flex-col gap-3">
          {commerceFaq.map(faq => (
            <li
              key={faq.id}
              className="text-white border-b border-white flex justify-between py-2"
            >
              <FaqPart
                id={faq.id}
                title={faq.title}
                description={faq.description}
                expandedId={expandedId}
                onAccordionChange={handleAccordionChange}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className='w-1/2 flex justify-between'>
        {' '}
        <div className="w-[1px] h-[740px] bg-white"></div>
        <div className="relative w-[420px] h-[560px] bg-cardServiceBackground">
          <div className="absolute text-white flex flex-col gap-6 w-full h-full px-9 py-7 z-10">
            <div className="flex flex-col gap-4">
              <Image
                src={'/basket.svg'}
                alt="Basket Image"
                width={40}
                height={40}
              />
              <span className="text-3xl font-semibold uppercase">
                {faqCard.title}
              </span>
            </div>
            <div className="flex justify-center">
              <Image
                className="w-[220px] rounded-2xl"
                src={faqCard.src}
                alt="E-commerce Image"
                width={513}
                height={515}
              />
            </div>
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-2">
                <span className="font-light">From:</span>
                <span className="font-semibold text-xl">{faqCard.price}</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-light">Date terms:</span>
                <span className="font-semibold text-xl">{faqCard.terms}</span>
              </div>
            </div>
            <div className="flex justify-center">
              <button className={css.button}>
                <span className={css.buttonText}>Contact</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
