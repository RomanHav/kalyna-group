import Image from 'next/image';
export default function HeaderVideo() {
  return (
    <div>
      <div className="bg-black/50 flex flex-col gap-3 justify-center mt-24 items-center py-14 relative z-10">
        <p className="px-14 bg-gradient-to-r from-white to-custom-green bg-clip-text text-transparent text-center uppercase text-2xl font-semibold">
          Create an Effective Website for Your Business With Us
        </p>
        <Image
          src={'/headergif.gif'}
          alt="Honeycombs Gif"
          unoptimized={true}
          width={220}
          height={220}
        />
        <button className="bg-gradient-to-r from-custom-blue to-custom-green text-white py-2 px-4 rounded uppercase text-xl font-semibold">
          Send request
        </button>
      </div>
      <Image
        className="hidden"
        src={'/headergif.gif'}
        alt="Honeycombs Gif"
        width={220}
        height={220}
      />
    </div>
  );
}
