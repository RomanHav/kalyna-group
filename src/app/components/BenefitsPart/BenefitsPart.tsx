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
    <div
      data-id={id}
      className={`relative px-1 lg:px-0 flex flex-col lg:flex-row lg:gap-0 items-center gap-8 lg:justify-around`}
    >
      <div className="flex flex-col gap-4 lg:gap-16">
        <div className="flex flex-col gap-2">
          <span className="text-2xl font-thin md:text-3xl lg:text-4xl">
            {numberCard}
          </span>
          <h3 className="text-xl font-medium max-sm:min-h-14 md:text-2xl  text-balance lg:text-4xl">
            {title}
          </h3>
        </div>
        <p className="text-lg text-balance font-light md:text-xl min-h-[112px] md:w-[400px] lg:w-[450px] xl:w-[582px] lg:text-3xl">
          {description}
        </p>
      </div>
      <video
        className={'w-[280px] lg:w-[360px] xl:w-[520px]'}
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
