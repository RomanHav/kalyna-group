import clsx from 'clsx';
import Image from 'next/image';

interface BenefitsPartProps {
  src: string;
  title: string;
  numberCard: string;
  description: string;
}

const BenefitsPart: React.FC<BenefitsPartProps> = ({
  src,
  numberCard,
  title,
  description,
}) => {
  const childClass = clsx(
    numberCard === '003' || numberCard === '004' ? 'pt-10' : ''
  );

  return (
    <div className="flex flex-col mx-[45px] items-center rounded-3xl bg-white/10 py-6 min-h-[368px]">
      <Image
        className="w-[140px]"
        src={src}
        alt="Benefit Image"
        width={1000}
        height={1000}
      />
      <div
        className={`flex flex-col items-start justify-center px-3 text-white gap-2 ${childClass}`}
      >
        <div>
          <span className="text-xl font-thin hidden">{numberCard}</span>
          <h3 className="text-base font-medium">{title}</h3>
        </div>
        <p className="text-base font-light">{description}</p>
      </div>
    </div>
  );
};

export default BenefitsPart;
