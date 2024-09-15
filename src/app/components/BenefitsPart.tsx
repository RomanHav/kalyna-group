import Image from "next/image";

interface BenefitsPartProps {
    src: string;
    title: string;
    numberCard: string;
    description: string;
}

const BenefitsPart: React.FC<BenefitsPartProps> = ({ src, numberCard, title, description }) => {
    return (
        <div>
            <Image className="w-[170px]" src={src} alt="Benefit Image" width={1000} height={1000} />
            <div>
                <span>{numberCard}</span>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default BenefitsPart;