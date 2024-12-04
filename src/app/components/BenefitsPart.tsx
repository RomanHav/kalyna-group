import Image from 'next/image';

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
    <div data-id={id} className={`w-full`}>
      <div>
        <div>
          <span>{numberCard}</span>
          <h3>{title}</h3>
        </div>
        <p>{description}</p>
      </div>
      <Image src={src} alt="Benefits Image" width={400} height={400} />
    </div>
  );
};

export default BenefitsPart;
