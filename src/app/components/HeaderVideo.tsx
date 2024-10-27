import Image from 'next/image';
export default function HeaderVideo() {
  return (
    <div className="bg-black/50 flex pt-36 pb-20 px-16 justify-center items-center">
      <div className=" flex md:py-0 flex-wrap gap-3 justify-center pt-36 items-center py-14  md:gap-16 md:justify-start md:pr-5  relative z-10">
        <p className="px-14 md:px-0 md:text-3xl  bg-gradient-to-r from-white to-custom-green bg-clip-text text-transparent text-center md:text-left uppercase text-2xl font-semibold">
          Create an Effective Website for Your Business With Us
        </p>
        <Image
          className="md:hidden"
          src={'/headergif.gif'}
          alt="Honeycombs Gif"
          unoptimized={true}
          width={240}
          height={240}
        />
        <button className="bg-gradient-to-r from-custom-blue to-custom-green text-white py-2 px-4 rounded uppercase text-xl font-semibold">
          Send request
        </button>
      </div>
      <Image
        className="hidden md:block w-[65rem]"
        src={'/headergif.gif'}
        alt="Honeycombs Gif"
        width={240}
        height={240}
      />
    </div>
  );
}
