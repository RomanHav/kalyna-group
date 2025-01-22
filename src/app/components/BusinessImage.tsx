import Image from 'next/image';

const BusinessImage = () => {
  return (
    <div className="w-full h-[146px] md:h-[300px] lg:h-[400px] xl:h-[560px] bg-businessImage bg-cover absolute top-[28rem] lg:top-[32rem] xl:top-[28rem] z-10 flex flex-col justify-center gap-2 lg:gap-6 items-center text-white">
      <div className="flex items-center gap-1 md:gap-8 lg:gap-20">
        <span className="uppercase text-5xl md:text-[80px] lg:text-[128px] font-bold">Business</span>
        <Image
          className='w-[100px] md:w-[150px] lg:w-[200px]'
          src={'/growth.webp'}
          alt="Arrow Image"
          width={640}
          height={640}
        />
      </div>
      <div className="flex items-center gap-1 md:gap-8 lg:gap-20 xl:pl-[10%]">
        <Image
          className='w-[100px] md:w-[150px] lg:w-[200px]'
          src={'/people.webp'}
          alt="People Image"
          width={640}
          height={640}
        />
        <div className="w-full flex flex-col gap-3">
          <Image
          className='w-[240px] md:w-[380px] lg:w-[573px]'
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
