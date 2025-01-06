import ourTeam from '../../../../ourTeam.json';
import OurTeamPart from './OurTeamPart';

const OurTeam = () => {
  return (
    <div className="px-4 lg:px-20 my-14 flex flex-col items-center justify-center">
      <div className="flex flex-col items-start justify-center md:items-center gap-5 mb-16">
        <h3 className="text-white uppercase text-4xl md:text-5xl">Main Team</h3>
        <span className="text-2xl md:text-3xl bg-gradient-to-r from-custom-green to-custom-second-green bg-clip-text text-transparent">
          The people you will be working with
        </span>
      </div>
      <ul className="max-w-[1028px] flex flex-wrap items-center justify-center gap-16">
        {ourTeam.map(part => {
          return (
            <li key={part.id}>
              <OurTeamPart
                id={part.id}
                name={part.name}
                photo={part.photo}
                position={part.position}
                linkedin={part.linkedin}
                instagram={part.instagram}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default OurTeam;
