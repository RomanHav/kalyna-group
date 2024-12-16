import Image from 'next/image';

import CasesModal from './CasesModal';

interface CasesPartProps {
  id: number;
  background: string;
  title: string;
  src: string;
  span: string;
  href: string;
  logo: string;
  logoDescr: string;
  firstPerson: string;
  secondPerson: string;
  thirdPerson: string;
  developerPosition: string;
  managerPosition: string;
  siteImage: string;
  description: string;

  caseModal: number | null;
  handleCaseModal: (id?: number) => void;
}

const CasesSecondPart: React.FC<CasesPartProps> = ({
  id,
  title,
  background,
  src,
  span,
  href,
  logo,
  logoDescr,
  firstPerson,
  secondPerson,
  thirdPerson,
  developerPosition,
  managerPosition,
  siteImage,
  description,
  caseModal,
  handleCaseModal,
}) => {
  return (
    <>
      <div className="w-full h-screen relative">
        <div className="absolute w-full h-full z-10 bg-black bg-opacity-70"></div>
        <div className="relative z-20 h-full">
          <div className="py-20 flex flex-col w-full h-full justify-between items-center text-white">
            <Image
              className="h-[120px] object-contain"
              src={logo}
              alt="Case Logo"
              width={512}
              height={512}
            />
            <span className="uppercase text-4xl font-medium text-center tracking-wide max-w-[280px]">
              {title}
            </span>
            <button
              onClick={() => {
                handleCaseModal(id);
              }}
              className="rounded-full flex items-center justify-center border border-white w-16 h-16"
            >
              <Image
                className=""
                src="/arrow-cases.svg"
                alt="Case Logo"
                width={25}
                height={36}
              />
            </button>
          </div>
        </div>
      </div>
      {caseModal === id && (
        <CasesModal
          background={background}
          span={span}
          src={src}
          href={href}
          title={title}
          firstPerson={firstPerson}
          secondPerson={secondPerson}
          thirdPerson={thirdPerson}
          developerPosition={developerPosition}
          managerPosition={managerPosition}
          siteImage={siteImage}
          description={description}
          logoDescr={logoDescr}
          id={id}
          handleCaseModal={handleCaseModal}
          isOpen={caseModal === id}
        />
      )}
    </>
  );
};

export default CasesSecondPart;
