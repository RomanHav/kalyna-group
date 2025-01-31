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
      <div className="relative w-full h-screen">
        <div className="absolute w-full h-full z-10 bg-black bg-opacity-70"></div>
        <div className="relative z-20 h-full">
          <div
            className={`py-20 ${showOverlay ? 'block' : 'flex'} flex-col w-full h-full justify-between items-center text-white`}
          >
            <Image
              className={`${showOverlay ? 'hidden' : 'block'} h-[120px] object-contain`}
              src={logo}
              alt="Case Logo"
              width={512}
              height={512}
            />
            <span
              className={`${showOverlay ? 'hidden' : 'block'} uppercase text-4xl font-medium text-center tracking-wide max-w-[280px]`}
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
