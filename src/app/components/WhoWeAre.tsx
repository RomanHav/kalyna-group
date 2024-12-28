import Image from 'next/image';

const WhoWeAre = () => {
  return (
    <div className="relative text-white px-20 mb-14">
      <div className="flex items-center justify-between mb-40">
        {' '}
        <div className="w-[600px]">
          <div className="w-[340px] flex flex-col gap-5 mb-5">
            <h3 className="uppercase text-5xl">Who are we?</h3>
            <span className="uppercase text-xl bg-gradient-to-r from-custom-green to-custom-second-green bg-clip-text text-transparent">
              Let&#39;s get to know each other
            </span>
            <div className="w-full h-[2px] bg-white"></div>
          </div>
          <p className="text-lg">
            <span className="uppercase">Kalyna Group</span> is an innovative web
            development company dedicated to helping businesses thrive in the
            digital world. We combine modern technology and a client-centric
            approach to deliver high-quality solutions tailored to your business
            needs.
          </p>
        </div>
        <div className="w-[600px] relative h-[400px] bg-whoAreWe bg-cover bg-center rounded-xl">
          <Image
            className="absolute -top-1 -left-1"
            src={'/photo-line.svg'}
            alt="Photo Line"
            width={298}
            height={149}
          />
          <Image
            className="absolute rotate-180 -bottom-1 -right-1"
            src={'/photo-line.svg'}
            alt="Photo Line"
            width={298}
            height={149}
          />
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
