import Image from 'next/image';

interface ShoesCardProps {
  src: string;
  children: React.ReactNode;
  container?: string;
  button?: string;
  rotate?: string;
  bottom?: string;
}

const ShoesCard: React.FC<ShoesCardProps> = ({
  children,
  src,
  container,
  button,
  rotate,
  bottom,
}) => {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div
      className={`relative ${bottom} w-[250px] ${rotate} flex flex-col gap-4 rounded-3xl bg-white py-4 px-6`}
    >
      <div
        className={`${container} relative min-h-[237px] rounded-3xl flex justify-center items-center`}
      >
        <Image
          className="absolute -right-10 scale-125"
          src={src}
          alt="Shoes"
          width={457}
          height={481}
        />
        <div
          className={`${button} py-2 px-4 text-black text-2xl rounded-md absolute -bottom-3 -right-3`}
        >
          +
        </div>
      </div>
      <div className="text-black flex">
        <div className="flex flex-col items-start">
          {children}
          <span className="text-black/70 text-sm font-medium">
            Your product
          </span>
        </div>
        <ul className="flex gap-1 pt-1">
          {stars.map((star, index) => {
            return (
              <li key={index}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.98381 0.708984L8.03435 5.75304L13.0546 5.21509L8.68363 7.79453L10.7358 12.5061L6.98381 9.05624L3.23184 12.5061L5.28398 7.79453L0.913003 5.21509L5.93326 5.75304L6.98381 0.708984Z"
                    fill={`${star === stars.length ? '#8C8C8C' : '#64ECC7'}`}
                  />
                </svg>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ShoesCard;
