import ourTeam from '../about-us/ourTeam.json';
import OurTeamPart from './OurTeam/OurTeamPart';

const DesktopTeam = () => {
  return (
    <>
      <ul className="flex flex-wrap items-center justify-center gap-x-16 gap-y-20">
        {ourTeam.map(part => {
          return (
            <li key={part.id}>
              <OurTeamPart
                name={part.name}
                photo={part.photo}
                position={part.position}
                color={part.color}
                linkedin={part.linkedin}
                instagram={part.instagram}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default DesktopTeam;
