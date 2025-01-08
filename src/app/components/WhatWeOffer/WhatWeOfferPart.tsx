import Image from 'next/image';
import Link from 'next/link';

interface WhatWeOfferPartProps {
  title: string;
  id: number;
  description: string;
  src: string;
}

function _renderList({ id, title, description, src }: WhatWeOfferPartProps) {
  switch (id) {
    case 1:
      return (
        <div className="flex text-white flex-col justify-between py-8 px-9 h-[360px]">
          <h3 className="uppercase text-5xl font-medium">{title}</h3>
          <div className="flex justify-end items-center">
            <div className="flex justify-center items-center bg-white w-28 h-28 rounded-full">
              <Image src={src} alt="Kalyna Image" width={90} height={90} />
            </div>
          </div>
        </div>
      );
    case 4:
      return (
        <div className="flex flex-col justify-between text-white py-6 px-8 h-[360px]">
          <Link
            href={'/about-us'}
            className="text-3xl font-light italic underline"
          >
            {title}
          </Link>
          <div>
            <Link href={'/about-us'} className="flex items-center gap-2">
              <div className="flex justify-center items-center border border-white rotate-45 rounded-full w-12 h-12">
                <Image src={src} alt="About Us Button" width={21} height={30} />
              </div>
              <span className="text-base underline font-light italic">
                to about us
              </span>
            </Link>
          </div>
        </div>
      );
    default:
      return (
        <div className="flex flex-col justify-between py-6 px-8 h-[360px]">
          <div className="flex justify-center items-center w-12 h-12 bg-[#25982D]/50 rounded-full">
            <Image src={src} alt="What we offer Image" width={25} height={25} />
          </div>
          <div className="flex flex-col gap-6 text-white w-[270px]">
            <h4 className="text-2xl font-medium">{title}</h4>
            <p className="text-xl">{description}</p>
          </div>
        </div>
      );
  }
}

const WhatWeOfferPart: React.FC<WhatWeOfferPartProps> = props => {
  return <div>{_renderList(props)}</div>;
};

export default WhatWeOfferPart;
