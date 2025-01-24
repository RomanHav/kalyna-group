import Image from "next/image";

const MilkShake = () => {
  const skills = [
    'User persona',
    'Competitor analysis',
    'Brief',
    'Customer journay map',
    'Figma',
    'Competitor analysis',
  ];
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
      <div className="w-full lg:w-1/2">
        <div className="relative flex justify-center items-center rounded-lg w-full h-[250px] md:h-[450px] lg:h-[320px] xl:h-[354px] bg-uiDesignExpertise bg-cover bg-center"></div>
      </div>
      <div className="flex flex-col gap-6 text-white w-full lg:w-1/2">
        <div className="flex justify-between items-center">
          <h4 className="text-xl md:text-2xl lg:text-4xl uppercase">
            Milk Shake
          </h4>
          <a href={'https://www.behance.net/gallery/217282717/Milk_Shake'} target="_blanc">
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
        <p className="md:text-lg  w-11/12">
          Milk Shake is an American professional haircare brand. We focused on
          simplicity and vibrancy to highlight the brand&lsquo;s style and
          showcase the products in a way that allows the site to sell itself.
          The visual concept combines minimalism with bold accents, and
          intuitive navigation makes it easy to find and explore products.
        </p>
        <ul className="flex flex-wrap gap-4 w-full min-[1440px]:w-3/4">
          {skills.map((skill, index) => {
            return (
              <li
                key={index}
                className="text-sm md:text-base text-white/70 rounded-full border border-white/70 px-3 md:px-6 py-1 md:py-2"
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

export default MilkShake;
