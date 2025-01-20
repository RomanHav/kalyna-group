import Image from 'next/image';

interface CareerWhyKalynaPartProps {
  title: string;
  src: string;
  description: string;
}

const CareerWhyKalynaPart: React.FC<CareerWhyKalynaPartProps> = ({
  title,
  src,
  description,
}) => {
  return (
    <div className="flex flex-col items-center gap-8 text-white">
      <Image src={src} alt={title} width={48} height={48} />
      <div className='w-full flex gap-3 flex-col items-center'>
        <h4 className="uppercase text-center whitespace-pre md:text-xl lg:text-2xl font-semibold">
          {title}
        </h4>
        <div className="w-1/2 h-[1px] bg-white"></div>
      </div>
      <p className="text-center">{description}</p>
    </div>
  );
};

export default CareerWhyKalynaPart;
