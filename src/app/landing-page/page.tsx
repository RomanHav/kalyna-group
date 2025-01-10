import HeaderService from '../components/HeaderService';
import WhatWeOffer from '../components/WhatWeOffer/WhatWeOffer';
import LandingImage from '../LandingImage';
import offer from '../../../whatWeOfferLanding.json';
import Faq from '../components/Faq/Faq';
import landingFaq from '../../../landingFaq.json';
import WhyServicePage from '../components/WhyServicePage';
import whyLandingObject from '../../../whyLanding.json';

const LandingPage = () => {
  const faqCard = {
    title: 'Landing Page',
    src: '/landing.png',
    price: '$1000',
    terms: '1-2 weeks',
  };
  const whyLanding = {
    title: 'Why Your Business Needs a Landing Page?',
    description:
      'A well-crafted landing page is essential for capturing leads and driving conversions. Here’s what you gain by working with us.',
  };
  const headerText = {
    title: 'Click, Connect, Convert, Complete.',
    description: 'Your Perfect Landing Page Awaits you',
  };
  return (
    <div className="relative">
      <HeaderService headerText={headerText} />
      <LandingImage />
      <div className={'relative flex flex-col justify-center gap-20'}>
        <WhatWeOffer offer={offer} />
        <WhyServicePage
          whyService={whyLanding}
          whyServiceObject={whyLandingObject}
        />
        <Faq faqCard={faqCard} commerceFaq={landingFaq} />
      </div>
    </div>
  );
};

export default LandingPage;
