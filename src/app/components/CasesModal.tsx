import Image from 'next/image';

interface CasesModalProps {
  src: string;
  title: string;
  span: string;
  background: string;
  href: string;
  logoDescr: string;
  firstPerson: string;
  secondPerson: string;
  thirdPerson: string;
  developerPosition: string;
  managerPosition: string;
  siteImage: string;
  description: string;
  id?: number;
  isOpen: boolean;
  handleCaseModal: (id?: number) => void;
}

const CasesModal: React.FC<CasesModalProps> = ({
  background,
  id,
  isOpen,
  siteImage,
  href,
  title,
  span,
  logoDescr,
  firstPerson,
  secondPerson,
  thirdPerson,
  developerPosition,
  managerPosition,
  description,
  handleCaseModal,
}) => {
  return (
    <div
      className={`bg-custom-case-modal text-white absolute flex top-0 right-0 w-full h-screen z-[60] transition-all duration-300 ease-out ${
        isOpen ? 'visible opacity-100' : 'invisible opacity-0'
      }`}
    >
      <div
        className={`${background} relative bg-cover flex justify-center items-end w-[360px] h-full `}
      >
        <div className="absolute w-full h-full z-10 bg-black bg-opacity-70"></div>
        <button
          onClick={() => handleCaseModal(id)}
          className="mb-20 absolute z-20 rounded-full flex items-center justify-center border border-white w-16 h-16"
        >
          <Image
            className="rotate-90"
            src="/arrow-cases.svg"
            alt="Case Logo"
            width={25}
            height={36}
          />
        </button>
      </div>
      <div className="flex flex-col justify-between w-full h-screen">
        <div className="py-8 relative w-full h-full">
          <div className="absolute z-50 w-full h-full">
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
          <div className="absolute z-[60] px-28 w-full flex justify-between items-center">
            <Image
              className="h-[120px] object-contain"
              src={logoDescr}
              alt="Case Logo"
              width={512}
              height={512}
            />
            <div
              className={`${siteImage} drop-shadow-3xl relative bg-cover rounded-xl w-[460px] h-[260px]`}
            >
              <div className="bg-black w-full h-full rounded-xl absolute opacity-70"></div>
              <div className="absolute z-20 w-full h-full flex items-center justify-center">
                <a href={href} target="_blanc">
                  <div className="flex gap-8 items-center">
                    <span className="uppercase tracking-wide font-medium text-2xl">
                      Click here
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
        <div className="bg-white absolute z-[70] h-[430px] bottom-0 rounded-t-2xl text-black px-28 pt-10 pb-5">
          <div className="mb-7 relative">
            <div className="flex flex-col ml-6">
              <h3 className="text-4xl font-medium uppercase">{title}</h3>
              <span className="text-base">{span}</span>
            </div>
            <div className="before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:w-2 before:bg-black before:rounded-md"></div>
          </div>
          <div className="flex gap-1 flex-col mb-6">
            <p className="text-lg font-medium">
              {firstPerson}:{' '}
              <span className="font-normal">{developerPosition}</span>
            </p>
            <p className="text-lg font-medium">
              {secondPerson}:{' '}
              <span className="font-normal">{developerPosition}</span>
            </p>
            <p className="text-lg font-medium">
              {thirdPerson}:{' '}
              <span className="font-normal">{managerPosition}</span>
            </p>
          </div>
          <div className="flex flex-col">
            <h4 className="uppercase text-xl font-medium mb-6">
              Description of the project
            </h4>
            <p className="text-lg">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CasesModal;
