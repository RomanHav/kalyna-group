import Image from 'next/image';

const BusinessImage = () => {
  return (
    <div className="w-full h-[560px] bg-businessImage absolute top-[28rem] z-10 flex flex-col justify-center gap-6 items-center text-white">
      <div className="flex items-center gap-20">
        <span className="uppercase text-[128px] font-bold">Business</span>
        <Image
          src={'/business-arrow.svg'}
          alt="Arrow Image"
          width={150}
          height={150}
        />
      </div>
      <div className="flex items-center gap-20 pl-[10%]">
        <Image
          src={'/people.svg'}
          alt="People Image"
          width={150}
          height={150}
        />
        <div className="w-full flex flex-col gap-3">
          <Image
            src={'/website.svg'}
            alt="Business Logo Image"
            width={573}
            height={192}
          />
          <div className="w-full h-[1px] bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default BusinessImage;
