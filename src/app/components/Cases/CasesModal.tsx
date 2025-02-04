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
  isMobile?: boolean;
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
      className={`max-lg:fixed  ${isOpen ? 'lg:left-1/4 h-full flex lg:block opacity-100 max-lg:top-0' : 'h-0 max-lg:-top-full lg:-left-full opacity-0'} w-full lg:w-3/4 transition-all duration-300  max-lg:justify-center max-lg:items-start z-[1000] lg:absolute`}
    >
      <div className="absolute lg:overflow-hidden top-0 flex h-screen w-full flex-col justify-between overflow-y-auto text-white transition-transform duration-300 ease-out bg-custom-case-modal z-[1000]">
        <MdClose
          onClick={() => handleCaseModal(id)}
          className="absolute top-4 right-4 cursor-pointer z-[150] lg:hidden"
          size={32}
        />
        <div className="relative w-full py-8 lg:py-14">
          {/* Curved lines */}
          <div className="absolute top-20 left-0 z-50 h-full w-full">
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

          {/* Modal Content */}
          <div className="relative flex w-full flex-col items-center justify-between gap-5 px-4 z-[60] lg:flex-row lg:gap-0 lg:px-10 xl:px-28">
            <Image
              className="object-contain h-[60px] lg:h-[90px] xl:h-[120px]"
              src={logoDescr}
              alt="Case Logo"
              width={512}
              height={512}
            />
            <div
              className={`${siteImage} drop-shadow-3xl relative bg-cover rounded-xl w-[240px] h-[120px] md:w-[460px] md:h-[200px] xl:h-[260px]`}
            >
              <div className="absolute h-full w-full rounded-xl bg-black opacity-70"></div>
              <div className="absolute z-20 flex h-full w-full items-center justify-center">
                <a href={href} target="_blank">
                  <div className="flex items-center gap-8">
                    <span className="text-lg font-medium uppercase tracking-wide lg:text-2xl">
                      {id === 40 ? 'Contact us' : 'Click here'}
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
              </div>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="rounded-t-2xl bg-white py-10 text-black z-[70] px-[45px] lg:px-28">
          <div className="relative mb-7">
            <div className="ml-6 flex flex-col">
              <h3 className="text-2xl font-medium uppercase md:text-4xl">
                {title}
              </h3>
              <span className="text-sm md:text-base">{span}</span>
            </div>
            <div className="before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:w-2 before:bg-black before:rounded-md"></div>
          </div>
          <div className="flex flex-col">
            <h4 className="mb-6 text-lg font-medium uppercase md:text-xl">
              {id !== 40
                ? 'Description of the project'
                : 'Build your website with us'}
            </h4>
            <p className="text-base min-h-[290px] md:min-h-40 md:text-lg">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CasesModal;
