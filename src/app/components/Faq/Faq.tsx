'use client';

import Image from 'next/image';
import css from './Faq.module.css';
import FaqPart from './FaqPart';
import React, {useCallback, useState} from 'react';

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
  const handleAccordionChange = useCallback((itemId: number) => {
    setExpandedId(expandedId === itemId ? false : itemId);
  }, [expandedId]);


  return (
    <div className="flex flex-col lg:flex-row lg:h-[780px] justify-between items-center px-10 lg:px-16 xl:px-36">
      <div className="w-full lg:w-1/2 lg:pr-10 xl:pr-24 pb-10">
        <h3 className="text-3xl lg:text-6xl mb-5 xl:mb-12 font-medium uppercase text-center text-white">
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
      <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-between">
        {' '}
        <div className="hidden lg:block w-[1px] lg:min-h-screen xl:h-[740px] bg-white"></div>
        <div className="relative w-full md:w-[420px] h-[390px] min-[400px]:h-[450px] md:h-[550px] bg-cardServiceBackground bg-cover bg-center bg-no-repeat">
          <div className="absolute text-white flex flex-col gap-3 lg:gap-6 w-full h-full px-7 py-5 md:px-9 md:py-7 z-10">
            <div className="flex flex-col gap-2 md:gap-4">
              <Image
                src={'/basket.svg'}
                alt="Basket Image"
                width={40}
                height={40}
              />
              <span className="text-xl md:text-3xl font-semibold uppercase">
                {faqCard.title}
              </span>
            </div>
            <div className="flex justify-center">
              <Image
                className="w-[140px] md:w-[220px] rounded-2xl"
                src={faqCard.src}
                alt={faqCard.title}
                width={513}
                height={515}
              />
            </div>
            <div className="flex justify-between items-center">
              <div className="flex flex-col md:gap-2 gap-1">
                <span className="font-light text-sm lg:text-base">From:</span>
                <span className="font-semibold text-lg lg:text-xl">
                  {faqCard.price}
                </span>
              </div>
              <div className="flex flex-col md:gap-2 gap-1">
                <span className="font-light text-sm lg:text-base">
                  Date terms:
                </span>
                <span className="font-semibold text-lg md:text-xl">
                  {faqCard.terms}
                </span>
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
