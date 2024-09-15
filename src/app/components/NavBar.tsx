import Image from "next/image";
import Link from "next/link";

interface NavBarProps{
   handleClick: () => void
}

const NavBar: React.FC<NavBarProps> = ({handleClick}) =>{

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light relative z-10">
   <div className="flex justify-between items-center bg-black bg-opacity-30 py-6 px-4 border-b border-white rounded-b-lg">
      <Link href={'/'}>
         <Image className="w-16 h-12" src={'/logo.png'} alt="Logo" width={512} height={387}/>
      </Link>
      <button type="button" onClick={handleClick} aria-label="Toggle menu">
         <Image src={'/Menu.svg'} alt="Burger Button" width={50} height={50}/>
        </button>
   </div>
</nav>

    );
}

export default NavBar;