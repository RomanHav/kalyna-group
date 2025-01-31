import React from 'react';

interface BenefitsPartProps {
  srcWebp: string;
  srcMov: string;
  title: string;
  numberCard: string;
  description: string;
  id?: number;
}

const BenefitsPart: React.FC<BenefitsPartProps> = ({
  srcWebp,
  srcMov,
  numberCard,
  title,
  description,
  id,
}) => {
  return (
    <div data-id={id} className={` relative flex items-center justify-around `}>
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-2">
          <span className="font-thin text-4xl">{numberCard}</span>
          <h3 className="font-medium text-4xl">{title}</h3>
        </div>
        <p className="font-light text-3xl w-[582px]">{description}</p>
      </div>
      <video
        className={'w-[520px]'}
        src={srcWebp}
        autoPlay
        loop
        muted
        controls={false}
      >
        <source src={srcWebp} type={'video/webm'} />
        <source src={srcMov} type='video/mp4; codecs="hvc1"' />
      </video>
    </div>
  );
};

export default BenefitsPart;
