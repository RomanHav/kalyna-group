import WhatWeOfferPart from './WhatWeOfferPart';
import React from "react";

interface OfferProps {
  id: number;
  title: string;
  description: string;
  src: string;
}

interface OfferPropsPart {
  offer: OfferProps[];
}

const WhatWeOffer: React.FC<OfferPropsPart> = ({ offer}) => {
  return (
    <div>
      <ul className="flex flex-wrap justify-center items-center">
        {offer.map(item => {
          return (
            <li
              key={item.id}
              className={`${item.id == 1 ? 'w-1/2' : 'w-1/4'} ${item.id === 1 || item.id === 4 ? 'bg-none' : 'bg-gradient-to-bl from-[#28FF7E]/10 to-[#18994C]/10'}`}
            >
              <WhatWeOfferPart
                title={item.title}
                id={item.id}
                description={item.description}
                src={item.src}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WhatWeOffer;
