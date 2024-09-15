import Image from "next/image";
interface ServicePartProps{
    title: string,
    src: string,
    price: string
}

const ServicePart: React.FC<ServicePartProps>=({ title, src, price }) =>{
    return (
        <div>
        <Image className="w-60" src={src} alt="Service Image" width={513} height={515} />
            <h2>{title}</h2>
            <p>from price {price}</p>
    </div>
    )   
}

export default ServicePart;