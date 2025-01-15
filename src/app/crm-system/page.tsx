import CrmImage from '../components/CrmImage';
import HeaderService from '../components/HeaderService';
import offer from '../../../whatWeOffer/whatWeOfferCrm.json';
import WhatWeOffer from '../components/WhatWeOffer/WhatWeOffer';
import WhyServicePage from '../components/WhyServicePage';
import whyCrmObject from '../../../whySections/whyCrm.json';
import Faq from '../components/Faq/Faq';
import crmFaq from '../../../faq/crmFaq.json';

const CrmSystem = () => {
  const faqCard = {
    title: 'CRM System',
    src: '/crm.webp',
    price: '$3200',
    terms: '3-4 weeks',
  };
  const headerText = {
    title: 'Click, Connect, Convert, Complete.',
    description: 'Your Ideal CRM Solution Awaits You',
  };
  const whyCrm = {
    title: 'Why Your Business Needs a CRM System?',
    description:
      'A well-integrated CRM system is crucial for managing customer relationships and streamlining business processes. Here’s what you gain by working with us.',
  };
  return (
    <div className="relative mb-20">
      <HeaderService headerText={headerText} />
      <CrmImage />
      <div className={'relative flex flex-col justify-center gap-20'}>
        <WhatWeOffer offer={offer} />
        <WhyServicePage whyService={whyCrm} whyServiceObject={whyCrmObject} />
        <Faq faqCard={faqCard} commerceFaq={crmFaq} />
      </div>
    </div>
  );
};

export default CrmSystem;
