import Image from 'next/image';
import Link from 'next/link';

interface NavBarProps {
  handleClick: () => void;
  openModalId: number | null;
}

const NavBar: React.FC<NavBarProps> = ({ handleClick, openModalId }) => {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light bg-light ${!openModalId ? 'fixed' : ' -z-10'} z-[30] top-0 left-0 w-full backdrop-blur-md`}
    >
      <div className="flex justify-between items-center bg-[#0D1816]/60 py-6 px-4 md:px-16 border-b border-white rounded-b-lg">
        <Link href={'/'}>
          <Image
            className="w-16 md:scale-125 h-12"
            src={'/logo.png'}
            alt="Logo"
            width={512}
            height={387}
          />
        </Link>
        <button type="button" onClick={handleClick} aria-label="Toggle menu">
          <Image
            className="md:w-14"
            src={'/Menu.svg'}
            alt="Burger Button"
            width={50}
            height={50}
          />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
