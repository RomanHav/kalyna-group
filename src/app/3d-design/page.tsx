import HeaderService from '../components/HeaderService';
// import ThreeDSystemImage from '../components/ThreeDSystemImage';
import offer from '../../../whatWeOfferThreeD.json';
import threeFaq from '../../../threeFaq.json';
import WhatWeOffer from '../components/WhatWeOffer/WhatWeOffer';
import OurExpertise from '../components/OurExpertise/OurExpertise';
import MetaCossacs from '../components/MetaCossacs';
import Faq from '../components/Faq/Faq';
import Spline from '@splinetool/react-spline/next';
import Image from 'next/image';
import React from 'react';

const ThreeDSystem = () => {
  const faqCard = {
    title: '3d design',
    src: '/3d-design.png',
    price: '$350',
    terms: '1-2 weeks',
  };
  const headerText = {
    title: 'Discover, Design, Enjoy, Deligh.',
    description: 'Your Perfect 3D Design Awaits you',
  };
  return (
    <div className="relative">
      <HeaderService headerText={headerText} />
      <div className={'relative'}>
        <span
          className={
            'absolute z-10 left-32 bottom-28 font-bold text-[220px] text-white'
          }
        >
          3D
        </span>
        <div className={'absolute z-[2] left-40 -top-[60rem] flex scale-75'}>
          <Spline
            style={{ maxHeight: '1000px' }}
            scene="https://prod.spline.design/93F01KRNQCu4r7oO/scene.splinecode"
          />
        </div>
        <Image
          className={'absolute right-20 w-[740px] bottom-[33rem] '}
          src={'/design.svg'}
          alt={'3d'}
          width={740}
          height={220}
        />
      </div>
      <div className={'relative flex flex-col justify-center gap-20'}>
        <WhatWeOffer offer={offer} />
        <OurExpertise>
          <MetaCossacs />
        </OurExpertise>
        <Faq faqCard={faqCard} commerceFaq={threeFaq} />
      </div>
    </div>
  );
};

export default ThreeDSystem;
