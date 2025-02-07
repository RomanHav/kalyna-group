'use client';

import Image from 'next/image';
import css from './Faq.module.css';
import FaqPart from './FaqPart';
import React, { useCallback, useState } from 'react';

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
  const handleAccordionChange = useCallback(
    (itemId: number) => {
      setExpandedId(expandedId === itemId ? false : itemId);
    },
    [expandedId]
  );

  return (
    <div className="flex flex-col items-center justify-between px-10 lg:h-[780px] lg:flex-row lg:px-16 xl:px-36">
      <div className="w-full pb-10 lg:w-1/2 lg:pr-10 xl:pr-24">
        <h3 className="mb-5 text-center text-3xl font-medium uppercase text-white lg:text-6xl xl:mb-12">
          Faq
        </h3>
        <ul className="flex flex-col gap-3">
          {commerceFaq.map(faq => (
            <li
              key={faq.id}
              className="flex justify-between border-b border-white py-2 text-white"
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
      <div className="flex w-full items-center justify-center text-white lg:w-1/2 lg:justify-between">
        {' '}
        <div className="hidden bg-white w-[1px] lg:block lg:min-h-screen xl:h-[740px]"></div>
        <div className={'flex flex-col gap-20 md:w-[420px] '}>
          <div className="relative w-full rounded-2xl bg-center bg-no-repeat shadow-sm shadow-amber-50/40 backdrop-blur-lg h-[390px] bg-emerald-900/15 md:h-[550px] min-[400px]:h-[450px]">
            <div className="absolute z-10 flex h-full w-full flex-col gap-3 px-7 py-5 text-white md:px-9 md:py-7 lg:gap-6">
              <div className="flex flex-col gap-2 md:gap-4">
                <Image
                  src={'/basket.svg'}
                  alt="Basket Image"
                  width={40}
                  height={40}
                />
                <span className="text-xl font-semibold uppercase md:text-3xl">
                  {faqCard.title}
                </span>
              </div>
              <div className="flex justify-center">
                <Image
                  className="rounded-2xl w-[140px] md:w-[220px]"
                  src={faqCard.src}
                  alt={faqCard.title}
                  width={513}
                  height={515}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1 md:gap-2">
                  <span className="text-sm font-light lg:text-base">From:</span>
                  <span className="text-lg font-semibold lg:text-xl">
                    {faqCard.price}
                  </span>
                </div>
                <div className="flex flex-col gap-1 md:gap-2">
                  <span className="text-sm font-light lg:text-base">
                    Date terms:
                  </span>
                  <span className="text-lg font-semibold md:text-xl">
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
          <p className={'font-light italic '}>
            * Prices and timelines are determined based on project complexity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
