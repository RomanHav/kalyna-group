import Faq from '../components/Faq/Faq';
import CommerceImage from '../components/CommerceImage';
import OurExpertise from '../components/OurExpertise/OurExpertise';
import WhatWeOffer from '../components/WhatWeOffer/WhatWeOffer';
import commerceFaq from '../../../commerceFaq.json';
import WoodMinded from '@/app/components/WoodMinded';
import React from 'react';
import HeaderService from '@/app/components/HeaderService';
import offer from '../../../whatWeOfferCommerce.json';


const ECommerce = () => {
  const faqCard = {
    title: 'E-commerce',
    src: '/e-commerce.png',
    price: '$5000',
    terms: '4-6 weeks',
  };
  const headerText = {
    title: 'Tell, customize, sell, enjoy.',
    description: 'Build your desired web store',
  };
  return (
    <div className="relative">
      <HeaderService headerText={headerText} />
      <CommerceImage />
      <div className={'relative flex flex-col justify-center gap-20'}>
        <WhatWeOffer offer={offer} />
        <OurExpertise>
          <WoodMinded />
        </OurExpertise>
        <Faq faqCard={faqCard} commerceFaq={commerceFaq} />
      </div>
    </div>
  );
};

export default ECommerce;
