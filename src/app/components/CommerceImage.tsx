import Image from 'next/image';
import ShoesCard from './ShoesCard';

const CommerceImage = () => {
  return (
    <div className="relative w-full flex flex-col justify-center items-center -top-80 text-white">
      <Image
        className="w-[457px]"
        src={'/phone.png'}
        alt="Phone Image"
        width={512}
        height={554}
      />
      <span className="absolute bottom-36 flex justify-center items-center w-full h-full uppercase text-[197px] font-semibold">
        E-commerce
      </span>
      <div className="relative z-10 flex gap-36">
        <ShoesCard
          src={'/first-shoes.png'}
          container={'bg-[#7FFFA5]'}
          button={'bg-[#6FE8C7]'}
          rotate={'-rotate-[25deg]'}
          bottom={'bottom-[250px]'}
        >
          <span className="text-2xl font-medium">$74</span>
        </ShoesCard>
        <ShoesCard
          src="/second-shoes.png"
          container={'bg-[#6FE8C7]'}
          button={'bg-[#7FFFA5]'}
          rotate={'rotate-[20deg]'}
          bottom={'bottom-[190px]'}
        >
          <span className="text-2xl font-medium">$87</span>
        </ShoesCard>
      </div>
    </div>
  );
};

export default CommerceImage;
