import HeaderService from '@/app/components/HeaderService';
import WhatWeOffer from '@/app/components/WhatWeOffer/WhatWeOffer';
import offer from '../../../whatWeOffer/whatWeOfferUi.json';
import HeaderUi from '@/app/components/HeaderUi';
import faq from '../../../faq/uiFaq.json';
import Faq from '@/app/components/Faq/Faq';
import OurExpertise from '@/app/components/OurExpertise/OurExpertise';
import WoodMinded from '@/app/components/WoodMinded';
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
  return (
    <div className={'relative mb-20'}>
      <HeaderService headerText={headerText} />
      <HeaderUi />
      <div className={'relative flex flex-col justify-center gap-20'}>
        <WhatWeOffer offer={offer} />
        <OurExpertise>
          <WoodMinded />
        </OurExpertise>
        <Faq faqCard={faqCard} commerceFaq={faq} />
      </div>
    </div>
  );
};

export default UiUxDesign;
