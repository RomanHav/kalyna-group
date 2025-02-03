import Image from 'next/image';
import React from 'react';

interface CasesPartProps {
  id: number;
  title: string;
  logo: string;
  showOverlay: boolean;
  handleCaseModal: (id?: number) => void;
}

const CasesSecondPart: React.FC<CasesPartProps> = ({
  id,
  title,
  logo,
  handleCaseModal,
  showOverlay,
}) => {
  return (
    <>
      <div className="relative w-full h-[300px] md:h-[380px] lg:h-screen">
        <div className="absolute z-10 h-full w-full bg-black bg-opacity-70"></div>
        <div className="relative z-20 h-full">
          <div
            className={`py-5 md:py-8 lg:py-20 ${showOverlay ? 'block' : 'flex'} flex-col w-full h-full justify-between items-center text-white`}
          >
            <Image
              className={`${showOverlay ? 'hidden' : 'block'} h-[60px] md:h-[90px] lg:h-[120px] object-contain`}
              src={logo}
              alt="Case Logo"
              width={512}
              height={512}
            />
            <span
              className={`${showOverlay ? 'hidden' : 'block'} text-balance uppercase text-2xl md:text-3xl lg:text-4xl font-medium text-center tracking-wide max-w-[280px]`}
            >
              {title}
            </span>
            <div
              className={`${showOverlay ? 'absolute bottom-20 w-full flex items-center justify-center' : ''}`}
            >
              <button
                onClick={() => handleCaseModal(id)}
                className={` rounded-full flex items-center justify-center border border-white w-16 h-16`}
              >
                <Image
                  className={`${showOverlay ? 'rotate-90' : ''} transition-transform`}
                  src="/arrow-cases.svg"
                  alt="Case Logo"
                  width={25}
                  height={36}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CasesSecondPart;
