import Image from 'next/image';
import React from 'react';

interface CasesLinkImageProps {
  id?: number;
  href?: string;
  handleContactModal?: () => void;
}

const CasesLinkImage: React.FC<CasesLinkImageProps> = ({
  id,
  href,
  handleContactModal,
}) => {
  return (
    <div className="absolute z-20 flex h-full w-full items-center justify-center">
      {id === 40 ? (
        <button onClick={handleContactModal}>
          <div className="flex items-center gap-8">
            <span className="text-lg font-medium uppercase tracking-wide lg:text-2xl">
              Contact us
            </span>
            <Image
              className="rotate-90 text-white"
              src="/arrow-cases.svg"
              alt="Case Logo"
              width={25}
              height={36}
            />
          </div>
        </button>
      ) : (
        <a href={href} target={'_blank'}>
          <div className="flex items-center gap-8">
            <span className="text-lg font-medium uppercase tracking-wide lg:text-2xl">
              Click here
            </span>
            <Image
              className="rotate-90 text-white"
              src="/arrow-cases.svg"
              alt="Case Logo"
              width={25}
              height={36}
            />
          </div>
        </a>
      )}
    </div>
  );
};

export default CasesLinkImage;
