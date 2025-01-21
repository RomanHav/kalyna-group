const MetaCossacs = () => {
  const skills = [
    'Blender',
    'Substance Painter',
    'CC4',
    'Adobe Photoshop',
    'Marvelous Designer',
    'Adobe After Effects',
  ];
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
      <div className="w-full lg:w-1/2">
        <div className="relative flex justify-center items-center rounded-lg w-full h-[150px] md:h-72 lg:h-[354px] bg-threeExpertise bg-cover bg-center">
          <div className="absolute w-full h-full bg-[#263238] opacity-70 rounded-lg"></div>
          <div className="absolute flex justify-center items-center z-10 w-full h-full">
            <span className="uppercase text-3xl lg:text-5xl border-b pb-2 border-white font-light text-white">
              Meta Cossacs
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 text-white w-full lg:w-1/2">
        <div className="flex justify-between items-center">
          <h4 className="text-xl md:text-2xl lg:text-4xl uppercase">
            Meta Cossacs
          </h4>
        </div>
        <p className="md:text-lg  w-11/12">
          Our 3D team contributed to MetaCossacs, supporting Ukrainian families
          and the Armed Forces. Using Blender, Unreal Engine, and Photoshop, we
          created 3D models inspired by the bravery of Ukrainian soldiers,
          symbolizing resilience and unity.
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

export default MetaCossacs;
