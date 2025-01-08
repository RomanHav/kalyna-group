import Faq from '../components/Faq/Faq';
import CommerceImage from '../components/CommerceImage';
import OurExpertise from '../components/OurExpertise/OurExpertise';
import WhatWeOffer from '../components/WhatWeOffer/WhatWeOffer';
import commerceFaq from '../../../commerceFaq.json';

const ECommerce = () => {
  const faqCard = {
    title: 'E-commerce',
    src: '/e-commerce.png',
    price: '$5000',
    terms: '4-6 weeks',
  };

  return (
    <div className="relative">
      <div className="w-full h-[100vh]">
        <div className="relative w-full flex -top-[100%] h-[1300px] blur-xl justify-center items-center">
          <div className="absolute flex flex-col justify-end items-center z-20 text-white rounded-full w-[1100px] bg-[#031511] h-[1100px]">
            <h4 className="uppercase">Tell, customize, sell, enjoy.</h4>
            <p>
              Build your desired web store with{' '}
              <span className="uppercase">Kalyna group</span>
            </p>
            <button>Write Now</button>
          </div>
          <div className="absolute z-10 bg-gradient-to-tl from-[#0A8680] to-[#25982D] rounded-full w-[1300px] h-[1300px]"></div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <CommerceImage />
      </div>
      <div className="mb-40">
        <WhatWeOffer />
      </div>
      <div className="mb-40">
        <OurExpertise />
      </div>
      <div className="mb-40">
        <Faq faqCard={faqCard} commerceFaq={commerceFaq} />
      </div>
    </div>
  );
};

export default ECommerce;
