import BenefitsPart from "./BenefitsPart";
import Title from "./Title";

interface BenefitsInfo {
    id?: number;
    src: string;
    numberCard: string;
    title: string;
    description: string;
}

interface BenefitsProps {
    info: BenefitsInfo[];
}

const Benefits: React.FC<BenefitsProps> = ({ info }) => {
    return (
        <div>
            <Title title="Benefits" />
            <ul>
                {info.map((infopart) => {
                    return (
                        <li key={infopart.id}>
                            <BenefitsPart 
                                src={infopart.src} 
                                numberCard={infopart.numberCard} 
                                title={infopart.title} 
                                description={infopart.description} 
                            />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Benefits;
