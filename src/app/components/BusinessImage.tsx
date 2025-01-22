import Image from 'next/image';

const BusinessImage = () => {
  return (
    <div className="w-full h-[560px] bg-businessImage absolute top-[28rem] z-10 flex flex-col justify-center gap-6 items-center text-white">
      <div className="flex items-center gap-20">
        <span className="uppercase text-[128px] font-bold">Business</span>
        <Image
          className='w-[200px]'
          src={'/growth.webp'}
          alt="Arrow Image"
          width={640}
          height={640}
        />
      </div>
      <div className="flex items-center gap-20 pl-[10%]">
        <Image
          className='w-[200px]'
          src={'/people.webp'}
          alt="People Image"
          width={640}
          height={640}
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
