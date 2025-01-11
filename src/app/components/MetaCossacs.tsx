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
    <div className="flex items-center justify-between">
      <div className="w-1/2">
        <div className="relative flex justify-center items-center rounded-lg w-[538px] h-[354px] bg-threeExpertise bg-cover bg-center">
          <div className="absolute w-full h-full bg-[#263238] opacity-70 rounded-lg"></div>
          <div className="absolute flex justify-center items-center z-10 w-full h-full">
            <span className="uppercase text-5xl border-b pb-2 border-white font-light text-white">
              Meta Cossacs
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 text-white w-1/2">
        <div className="flex justify-between items-center">
          <h4 className="text-4xl uppercase">Meta Cossacs</h4>
        </div>
        <p className="text-lg w-11/12">
          Our 3D team contributed to MetaCossacs, supporting Ukrainian families
          and the Armed Forces. Using Blender, Unreal Engine, and Photoshop, we
          created 3D models inspired by the bravery of Ukrainian soldiers,
          symbolizing resilience and unity.
        </p>
        <ul className="flex flex-wrap gap-4 w-9/12">
          {skills.map((skill, index) => {
            return (
              <li
                key={index}
                className="text-base text-white/70 rounded-full border border-white/70 px-6 py-2"
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
