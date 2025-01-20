import Image from 'next/image';

const WoodMinded = () => {
  const skills = [
    'Shopify',
    'Shopify apps integration',
    'Payment integration',
    'Figma',
  ];
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
      <div className="w-full lg:w-1/2 ">
        <div className="relative flex justify-center items-center rounded-lg w-full h-[150px] lg:w-[538px] lg:h-[354px] bg-ecommerceExpertise bg-cover bg-center">
          <div className="absolute w-full h-full bg-black opacity-70 rounded-lg"></div>
          <div className="absolute flex justify-center items-center z-10 w-full h-full">
            <Image
              className="w-32 lg:w-64"
              src={'/wood-logo-descr.png'}
              alt="Wood Minded Logo"
              width={292}
              height={140}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 text-white w-full lg:w-1/2">
        <div className="flex justify-between items-center">
          <h4 className="text-xl lg:text-4xl uppercase">Wood Minded</h4>
          <a
            href={
              'https://woodminded.shop/?srsltid=AfmBOoqQUckztejD4Z0Z83IRV5UPhcH_jtZo7m1GTub_Gb2UT1bbcWlZ'
            }
            target="_blanc"
          >
            <div className="flex justify-center items-center border border-white rounded-full rotate-[135deg] w-11 h-11">
              <Image
                src={'/arrow-cases.svg'}
                alt="Wood Minded Button"
                width={18}
                height={26}
              />
            </div>
          </a>
        </div>
        <p className="lg:text-lg w-11/12">
          It&lsquo;s a website for purchasing wooden products, designed
          specifically for enthusiasts of wooden craftsmanship and art. The site
          features seamless navigation, custom product filters and an integrated
          secure payment system to enhance user experience and sales conversion.
        </p>
        <ul className="flex flex-wrap gap-4 w-full lg:w-3/4">
          {skills.map((skill, index) => {
            return (
              <li
                key={index}
                className="text-sm lg:text-base text-white/70 rounded-full border border-white/70 px-3 lg:px-6 py-1 lg:py-2"
              >
                {skill}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default WoodMinded;
