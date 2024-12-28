import Image from 'next/image';

interface Team {
  name: string;
  position: string;
    photo: string;
}

const OurTeamPart: React.FC<Team> = ({ name, position, photo}) => {
  return (
    <div className="relative w-[250px] h-[334px] bg-custom-team rounded-xl">
      <div className="absolute w-full h-full bg-black opacity-40 rounded-xl"></div>
      <div className="relative">
        <div className="absolute w-full h-full bg-black opacity-30 rounded-xl"></div>
        <Image
          className="w-[250px] h-[334px] rounded-xl"
          src={photo}
          alt="Person Photo"
          width={683}
          height={655}
        />
        <div className="hidden">
          <h5>{name}</h5>
          <span>{position}</span>
        </div>
      </div>
    </div>
  );
};

export default OurTeamPart;
