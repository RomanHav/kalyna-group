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
        <div className="flex max-lg:items-center text-white lg:flex-col justify-between py-4 px-4 md:px-9 lg:h-[360px]">
          <h3 className="uppercase text-2xl md:text-3xl lg:text-5xl font-medium">
            {title}
          </h3>
          <div className="flex justify-end items-center">
            <div className="flex justify-center scale-75 items-center bg-white w-28 h-28 rounded-full">
              <Image src={src} alt="Kalyna Image" width={90} height={90} />
            </div>
          </div>
        </div>
      );
    case 4:
      return (
        <div className="flex flex-col justify-between text-white py-4 px-4 md:py-6 md:px-8 h-[21rem] lg:h-[360px]">
          <Link
            href={'/about-us'}
            className="text-xl md:text-2xl lg:text-3xl font-light italic underline"
          >
            {title}
          </Link>
          <div>
            <Link href={'/about-us'} className="flex items-center gap-2">
              <div className="flex justify-center items-center border border-white rotate-45 rounded-full w-12 h-12">
                <Image
                  src={src}
                  className={'max-md:w-3'}
                  alt="About Us Button"
                  width={21}
                  height={30}
                />
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
        <div className="flex flex-col justify-between py-4 px-4 md:py-6 md:px-8 min-h-[380px] lg:min-h-[420px]">
          <div className="flex justify-center items-center min-h-12 w-12 h-12 bg-[#25982D]/50 rounded-full">
            <Image src={src} alt="What we offer Image" width={25} height={25} />
          </div>
          <div className="flex flex-col gap-6 text-white w-full xl:w-[270px]">
            <h4 className="text-lg md:text-xl lg:text-2xl font-medium">
              {title}
            </h4>
            <p className={`text-base lg:text-lg xl:text-xl`}>{description}</p>
          </div>
        </div>
      );
  }
}

const WhatWeOfferPart: React.FC<WhatWeOfferPartProps> = props => {
  return <div>{_renderList(props)}</div>;
};

export default WhatWeOfferPart;
