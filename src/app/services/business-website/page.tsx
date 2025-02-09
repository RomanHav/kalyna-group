'use client';
import BusinessImage from '../../components/BusinessImage';
import HeaderService from '../../components/HeaderService';
import WhatWeOffer from '../../components/WhatWeOffer/WhatWeOffer';
import offer from '../../../../whatWeOffer/whatWeOfferBusiness.json';
import OurExpertise from '../../components/OurExpertise/OurExpertise';
import Alcotrade from '../../components/Alcotrade';
import Faq from '../../components/Faq/Faq';
import businessFaq from '../../../../faq/businessFaq.json';
import animationDataOne from '@/lotties/lottieflow-com.json';
import animationDataTwo from '@/lotties/wired-flat.json';
import FormSecond from '@/app/components/StepsForm/FormSecond';
import { useState } from 'react';

const BusinessWebsite = () => {
  const [click, setClick] = useState(false);
  const handleOpen = () => {
    setClick(!click);
  };
  const faqCard = {
    title: 'Business Website',
    src: '/business.webp',
    price: '$4000',
    terms: '4-8 weeks',
  };
  const headerText = {
    title: 'Innovate, Inspire, Impress, Succeed.',
    description: 'Your Perfect Business Website Awaits You',
  };
  const defaultOptionsOne = {
    loop: true,
    autoplay: true,
    animationData: animationDataOne,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  const defaultOptionsTwo = {
    loop: true,
    autoplay: true,
    animationData: animationDataTwo,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div>
      <div className="relative mb-20 contain-paint">
        <HeaderService headerText={headerText} />
        <BusinessImage
          defaultOptionsOne={defaultOptionsOne}
          defaultOptionsTwo={defaultOptionsTwo}
        />
        <div className={'relative flex flex-col justify-center gap-20'}>
          <WhatWeOffer offer={offer} />
          <OurExpertise>
            <Alcotrade />
          </OurExpertise>
          <Faq
            faqCard={faqCard}
            commerceFaq={businessFaq}
            handleOpen={handleOpen}
          />
        </div>
      </div>
      {click && <FormSecond isModal={click} handleClose={handleOpen} />}
    </div>
  );
};

export default BusinessWebsite;
