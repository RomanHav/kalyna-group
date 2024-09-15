import ServicePart from "./ServicePart"
interface ServiceInfo {
    id?: number;
    title: string;
    src: string;
    price: string;
}

interface ServiceProps {
    info: ServiceInfo[];
}

    const Services: React.FC<ServiceProps> = ({ info }) =>{
    return (
        <ul className="flex flex-col items-center">
            {info.map((infopart) => {
                return (
                    <li key={infopart.id}>
                        <ServicePart title={infopart.title} src={infopart.src} price={infopart.price} />
                </li>
                )
            })}
        </ul>
    )
}
export default Services;