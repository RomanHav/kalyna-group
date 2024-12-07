import Image from 'next/image';
import css from './BenefitsPart.module.css';

interface BenefitsPartProps {
  src: string;
  title: string;
  numberCard: string;
  description: string;
  id?: number;
}

const BenefitsPart: React.FC<BenefitsPartProps> = ({
  src,
  numberCard,
  title,
  description,
  id,
}) => {
  return (
    <div
      data-id={id}
      className={`${css.mainContainer}`}
    >
      <div className={css.third}></div>
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-2">
          <span className="font-thin text-4xl">{numberCard}</span>
          <h3 className="font-medium text-4xl">{title}</h3>
        </div>
        <p className="font-light text-3xl w-[582px]">{description}</p>
      </div>
      <Image
        src={src}
        alt="Benefits Image"
        width={400}
        height={400}
        className="mx-auto"
      />
    </div>
  );
};

export default BenefitsPart;
