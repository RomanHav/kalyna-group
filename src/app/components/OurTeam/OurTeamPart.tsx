import Image from 'next/image';
import { IoLogoInstagram } from 'react-icons/io5';
import { FaLinkedin } from 'react-icons/fa';

interface Team {
  name: string;
  position: string;
  color: string;
  photo: string;
  linkedin: string;
  instagram: string;
}

const OurTeamPart: React.FC<Team> = ({
  name,
  position,
  color,
  photo,
  linkedin,
  instagram,
}) => {

  return (
    <div className="relative text-white w-60 flex flex-col gap-3 mx-auto">
      <div className={`relative w-full h-[235px] rounded contain-paint`}>
        <div
          className={`${color} w-full h-[172px] rounded absolute bottom-0`}
        ></div>
        <Image
          className="absolute z-10 w-[240px] -bottom-2"
          src={photo}
          alt="Kalyna employee photo"
          width={512}
          height={561}
        />
      </div>
      <div className="flex h-[130px] flex-col p-3 gap-4 bg-[#263238]/30 rounded">
        <div className="flex flex-col gap-1">
          <h5 className="text-base">{name}</h5>
          <span className="text-sm min-h-11">{position}</span>
        </div>
        <div className="flex items-center gap-2">
          <a href={instagram} target="_blank">
            <IoLogoInstagram size={20} />
          </a>
          <a href={linkedin} target="_blanc">
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default OurTeamPart;
