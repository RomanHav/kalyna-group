import Image from 'next/image';

interface CasesPartProps {
  isLast: boolean;
  title: string;
  src: string;
  span: string;
  href: string;
  handleClick: () => void;
}

const CasesPart: React.FC<CasesPartProps> = ({
  span,
  title,
  src,
  href,
  isLast,
  handleClick,
}) => {
  return (
    <div className="text-white w-full flex justify-center items-start flex-col">
      <div className="flex flex-col items-start lg:justify-center">
        <div className="flex gap-2.5 items-center mb-1.5">
          <Image src={'/tag.svg'} alt="Tag Image" width={26} height={26} />
          <span className="text-sm">{span}</span>
        </div>
      </div>
      <div className="flex flex-col md:items-center md:flex-row md:justify-between items-center w-full">
        <div className={`flex flex-col items-center md:items-start md:justify-center md:pt-4 ${isLast ? 'lg:w-[272px] lg:items-start lg:pt-3': 'lg:w-56 lg:items-center lg:pt-0'}`}>
          <h3
            className={`${isLast ? 'text-left text-2xl' : 'text-center text-3xl'} uppercase mb-2`}
          >
            {title}
          </h3>
          {!isLast ? (
            <a
              href={href}
              target="_blank"
              className="flex uppercase gap-6 border-b mb-5 p-1"
            >
              <span>Click here</span>
              <Image
                src={'/cases-arrow.svg'}
                alt="Cases Arrow"
                width={26}
                height={9}
              />
            </a>
          ) : (
            <button
              onClick={handleClick}
              className="flex px-4 py-1 bg-white text-black uppercase text-base font-medium rounded-xl shadow-md my-5 lg:px-6 lg:py-2 lg:my-3 hover:bg-custom-case-btn hover:text-white hover:duration-700"
            >
              Contact us
            </button>
          )}
        </div>
        <Image
          className="w-[150px]"
          src={src}
          alt="Image Project"
          width={513}
          height={513}
        />
      </div>
    </div>
  );
};

export default CasesPart;
