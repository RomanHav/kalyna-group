import BusinessImage from '../components/BusinessImage';
import HeaderService from '../components/HeaderService';
import WhatWeOffer from '../components/WhatWeOffer/WhatWeOffer';
import offer from '../../../whatWeOffer/whatWeOfferBusiness.json';
import OurExpertise from '../components/OurExpertise/OurExpertise';
import Alcotrade from '../components/Alcotrade';
import Faq from '../components/Faq/Faq';
import businessFaq from '../../../faq/businessFaq.json';

const BusinessWebsite = () => {
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
  return (
    <div>
      <div className="relative mb-20 contain-paint">
        <HeaderService headerText={headerText} />
        <BusinessImage />
        <div className={'relative flex flex-col justify-center gap-20'}>
          <WhatWeOffer offer={offer} />
          <OurExpertise>
            <Alcotrade />
          </OurExpertise>
          <Faq faqCard={faqCard} commerceFaq={businessFaq} />
        </div>
      </div>
    </div>
  );
};

export default BusinessWebsite;
