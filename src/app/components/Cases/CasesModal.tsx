import Image from 'next/image';
import React from 'react';
import { MdClose } from 'react-icons/md';

interface CasesModalProps {
  src: string;
  title: string;
  span: string;
  background: string;
  href: string;
  logoDescr: string;
  siteImage: string;
  description: string;
  id?: number;
  isOpen: boolean;
  handleCaseModal: (id?: number) => void;
}

const CasesModal: React.FC<CasesModalProps> = ({
  id,
  isOpen,
  siteImage,
  href,
  title,
  span,
  logoDescr,
  description,
  handleCaseModal,
}) => {
  return (
    <div
      className={` max-lg:fixed max-lg:inset-0 max-lg:w-full max-lg:h-full max-lg:flex max-lg:justify-center z-[500] max-lg:items-center ${
        isOpen ? 'visible opacity-100' : 'invisible opacity-0'
      }`}
    >
      <div
        className={`bg-custom-case-modal text-white relative top-0 lg:absolute lg:top-0 lg:right-0 w-full lg:w-3/4 z-[100] flex transition-all duration-300 ease-out `}
      >
        <div className="flex flex-col justify-between w-full h-screen lg:min-h-screen">
          <MdClose
            onClick={() => handleCaseModal(id)}
            className={'lg:hidden z-[80] absolute right-4 top-4'}
            size={32}
          />
          <div className="py-8 lg:py-4 relative w-full h-full">
            <div className="absolute max-lg:top-10 z-50 w-full h-full">
              <Image
                className="absolute z-10"
                src={'/first-vector.svg'}
                alt="Curved Line"
                width={1931}
                height={277}
              />
              <Image
                className="absolute z-20"
                src={'/second-vector.svg'}
                alt="Curved Line"
                width={2351}
                height={367}
              />
              <Image
                className="absolute z-30"
                src={'/third-vector.svg'}
                alt="Curved Line"
                width={2360}
                height={274}
              />
              <Image
                className="absolute z-40"
                src={'/fourth-vector.svg'}
                alt="Curved Line"
                width={1944}
                height={439}
              />
            </div>
            <div className="relative lg:absolute z-[60] px-4 lg:px-28 w-full flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between items-center">
              <Image
                className={`h-[60px] lg:h-[120px] object-contain`}
                src={logoDescr}
                alt="Case Logo"
                width={512}
                height={512}
              />
              {/*Image click-here*/}
              <div
                className={`${siteImage} drop-shadow-3xl relative bg-cover rounded-xl w-[200px] h-[80px] lg:w-[460px] lg:h-[260px] `}
              >
                <div className="bg-black w-full h-full rounded-xl absolute opacity-70"></div>
                <div className="absolute z-20 w-full h-full flex items-center justify-center">
                  <a href={href} target="_blanc">
                    <div className="flex gap-8 items-center">
                      <span className="uppercase tracking-wide font-medium text-lg lg:text-2xl">
                        {id === 40 ? 'Contact us' : 'Click here'}
                      </span>
                      <Image
                        className="text-white rotate-90"
                        src="/arrow-cases.svg"
                        alt="Case Logo"
                        width={25}
                        height={36}
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white z-[70] rounded-t-2xl text-black px-[45px] lg:px-28 py-10">
            <div className="mb-7 relative">
              <div className="flex flex-col ml-6">
                <h3 className="text-2xl lg:text-4xl font-medium uppercase">
                  {title}
                </h3>
                <span className="text-sm lg:text-base">{span}</span>
              </div>
              <div className="before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:w-2 before:bg-black before:rounded-md"></div>
            </div>
            <div className="flex flex-col">
              <h4 className="uppercase text-lg lg:text-xl font-medium mb-6">
                {id !== 40
                  ? 'Description of the project'
                  : 'Build your website with us'}
              </h4>
              <p className="text-base lg:text-lg min-h-[290px] lg:min-h-40 ">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CasesModal;
