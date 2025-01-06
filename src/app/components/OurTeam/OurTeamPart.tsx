import Image from 'next/image';
import React from 'react';
import { IoLogoInstagram } from 'react-icons/io5';
import { FaLinkedin } from 'react-icons/fa';

interface Team {
  id: number;
  name: string;
  position: string;
  photo: string;
  linkedin: string;
  instagram: string;
}

const OurTeamPart: React.FC<Team> = ({
  id,
  name,
  position,
  photo,
  linkedin,
  instagram,
}) => {
  return (
    <div className="relative bg-gradient-to-b from-custom-player-one to-custom-player-two rounded-xl">
      <div className="absolute w-full h-full bg-gradient-to-b from-black/20 to-black/50 rounded-xl"></div>
      <div className="relative contain-paint">
        <div className="absolute w-full h-full bg-black opacity-30 rounded-xl"></div>
        <Image
          className={`w-[250px] h-[334px] ${id === 5 ? 'rotate-12 scale-110' : ''} rounded-xl object-cover object-bottom`}
          src={photo}
          alt="Person Photo"
          width={1200}
          height={1600}
        />
        <div className="flex absolute flex-col text-white z-20 bottom-10 left-3">
          <h5>{name}</h5>
          <span className={'pb-1'}>{position}</span>
          <div className={`flex gap-1`}>
            <a href={`https://${instagram}`} target={'_blank'}>
              <IoLogoInstagram className="fill-white" size={20} />
            </a>
            <a href={`https://${linkedin}`} target={'_blank'}>
              <FaLinkedin className="fill-white" size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeamPart;
