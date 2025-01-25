const HeaderService = lazy(() => import('../components/HeaderService'));
import offer from '../../../whatWeOffer/whatWeOfferThreeD.json';
import threeFaq from '../../../faq/threeFaq.json';
const WhatWeOffer = lazy(() => import('../components/WhatWeOffer/WhatWeOffer'));
const OurExpertise = lazy(
  () => import('../components/OurExpertise/OurExpertise')
);
const MetaCossacs = lazy(() => import('../components/MetaCossacs'));
const Faq = lazy(() => import('../components/Faq/Faq'));
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
    title: 'Discover, Design, Enjoy, Delight.',
    description: 'Your Perfect 3D Design Awaits you',
  };
  return (
    <Suspense fallback={<div>Loading</div>}>
      <div className="relative contain-paint">
        <HeaderService headerText={headerText} />
        <div
          className={'absolute top-72 w-full flex justify-center items-center'}
        >
          <span
            className={
              'absolute z-10 left-12 lg:left-[8rem] bottom-20  md:bottom-28 lg:bottom-[12rem] font-bold text-[53px] md:text-[120px] xl:text-[170px] text-white'
            }
          >
            3D
          </span>
          <div className={'relative z-[5] lg:max-w-[850px] xl:max-w-[950px]'}>
            <video autoPlay loop muted playsInline>
              <source
                src={'/3d-animation.mov'}
                type='video/mp4; codecs="hvc1"'
              />
              <source src={'/3d-animation.webm'} type={'video/webm'} />
            </video>
          </div>
          <Image
            className={
              'absolute right-4 top-16 lg:right-20 w-[200px] md:w-[450px] xl:w-[580px] lg:top-24'
            }
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
