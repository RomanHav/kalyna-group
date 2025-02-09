'use client'
import HeaderService from '@/app/components/HeaderService';
import WhatWeOffer from '@/app/components/WhatWeOffer/WhatWeOffer';
import offer from '../../../../whatWeOffer/whatWeOfferUi.json';
import HeaderUi from '@/app/components/HeaderUi';
import faq from '../../../../faq/uiFaq.json';
import Faq from '@/app/components/Faq/Faq';
import OurExpertise from '@/app/components/OurExpertise/OurExpertise';
import MilkShake from '../../components/MilkShake';
import FormSecond from '@/app/components/StepsForm/FormSecond';
import { useState } from 'react';
const faqCard = {
  title: 'UI/UX design',
  src: '/web-design.webp',
  price: '$900',
  terms: '1-3 weeks',
};

const headerText = {
  title: 'Design, Delight, Deliver, Dominate.',
  description: 'Your Ideal User Experience Awaits',
};

const UiUxDesign = () => {
  const [click, setClick] = useState(false);
  const handleOpen = () => {
    setClick(!click);
  };
  return (
    <>
      <div className={'relative mb-20 contain-paint'}>
        <HeaderService headerText={headerText} />
        <HeaderUi />
        <div className={'relative flex flex-col justify-center gap-20'}>
          <WhatWeOffer offer={offer} />
          <OurExpertise>
            <MilkShake />
          </OurExpertise>
          <Faq faqCard={faqCard} commerceFaq={faq} handleOpen={handleOpen} />
        </div>
      </div>
      {click && <FormSecond isModal={click} handleClose={handleOpen} />}
    </>
  );
};

export default UiUxDesign;
