const HeaderService = lazy(() => import('../components/HeaderService'));
import offer from '../../../whatWeOffer/whatWeOfferThreeD.json';
import threeFaq from '../../../faq/threeFaq.json';
const WhatWeOffer = lazy(() => import('../components/WhatWeOffer/WhatWeOffer'));
const OurExpertise = lazy(
  () => import('../components/OurExpertise/OurExpertise')
);
const MetaCossacs = lazy(() => import('../components/MetaCossacs'));
const Faq = lazy(() => import('../components/Faq/Faq'));
import Spline from '@splinetool/react-spline/next';
import Image from 'next/image';
import React, { lazy, Suspense } from 'react';

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
    <Suspense fallback={<div>Loading</div>}>
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
            />s
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
    </Suspense>
  );
};

export default ThreeDSystem;
