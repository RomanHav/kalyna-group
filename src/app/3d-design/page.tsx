import HeaderService from '../components/HeaderService';
import ThreeDSystemImage from '../components/ThreeDSystemImage';
import offer from '../../../whatWeOfferThreeD.json';
import threeFaq from '../../../threeFaq.json';
import WhatWeOffer from '../components/WhatWeOffer/WhatWeOffer';
import OurExpertise from '../components/OurExpertise/OurExpertise';
import MetaCossacs from '../components/MetaCossacs';
import Faq from '../components/Faq/Faq';

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
      <ThreeDSystemImage />
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
