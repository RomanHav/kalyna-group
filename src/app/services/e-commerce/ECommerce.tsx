'use client';
import Faq from '../../components/Faq/Faq';
import CommerceImage from '../../components/CommerceImage';
import OurExpertise from '../../components/OurExpertise/OurExpertise';
import WhatWeOffer from '../../components/WhatWeOffer/WhatWeOffer';
import commerceFaq from '../../../../faq/commerceFaq.json';
import WoodMinded from '@/app/components/WoodMinded';
import React, { useState } from 'react';
import HeaderService from '@/app/components/HeaderService';
import offer from '../../../../whatWeOffer/whatWeOfferCommerce.json';
import FormSecond from '@/app/components/StepsForm/FormSecond';

const ECommerce = () => {
  const [click, setClick] = useState(false);
  const handleOpen = () => {
    setClick(!click);
    document.body.style.overflow = click ? 'auto' : 'hidden';
  };
  const faqCard = {
    title: 'E-commerce',
    src: '/e-commerce.webp',
    price: '$5000',
    terms: '4-6 weeks',
  };
  const headerText = {
    title: 'Tell, customize, sell, enjoy.',
    description: 'Build your desired web store',
  };
  return (
    <>
      <div className="relative contain-paint">
        <HeaderService headerText={headerText} handleOpen={handleOpen} />
        <CommerceImage />

        <div className={'relative flex flex-col justify-center gap-20'}>
          <WhatWeOffer offer={offer} />
          <OurExpertise>
            <WoodMinded />
          </OurExpertise>
          <Faq
            faqCard={faqCard}
            commerceFaq={commerceFaq}
            handleOpen={handleOpen}
          />
        </div>
      </div>
      {click && <FormSecond isModal={click} handleClose={handleOpen} />}
    </>
  );
};

export default ECommerce;
