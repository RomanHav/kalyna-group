import Image from 'next/image';

interface CasesPartProps {
  title: string;
  src: string;
  span: string;
  href: string;
  logo: string;
}

const CasesSecondPart: React.FC<CasesPartProps> = ({
  title,
  src,
  span,
  href,
  logo,
}) => {
  return (
    <div className="w-full h-screen relative">
      <div className="absolute w-full h-full z-10 bg-black bg-opacity-70"></div>
      <div className='relative z-20 h-full'>
        <div className="py-20 flex flex-col w-full h-full justify-between items-center text-white">
          <Image
            className="h-[120px] object-contain"
            src={logo}
            alt="Case Logo"
            width={512}
            height={512}
          />
          <span className='uppercase text-4xl font-medium text-center tracking-wide max-w-[280px]'>{title}</span>
          <button className="rounded-full flex items-center justify-center border border-white w-16 h-16">
            <Image
              className=""
              src="/arrow-cases.svg"
              alt="Case Logo"
              width={25}
              height={36}
            />
          </button>
        </div>
        <div className="hidden bg-gray-500">
          <p>{span}</p>
          <Image src={src} alt="Case Image" width={100} height={100} />
          <a href={href}>Link</a>
        </div>
      </div>
    </div>
  );
};

export default CasesSecondPart;
