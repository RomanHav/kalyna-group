import Image from "next/image";
import Link from "next/link";

interface NavBarProps {
	handleClick: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ handleClick }) => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light fixed top-0 left-0 w-full z-[15] backdrop-blur-md">
			<div className="flex justify-between items-center bg-[#0D1816]/60 py-6 px-4 border-b border-white rounded-b-lg">
				<Link href={"/"}>
					<Image
						className="w-16 h-12"
						src={"/logo.png"}
						alt="Logo"
						width={512}
						height={387}
					/>
				</Link>
				<button type="button" onClick={handleClick} aria-label="Toggle menu">
					<Image src={"/Menu.svg"} alt="Burger Button" width={50} height={50} />
				</button>
			</div>
		</nav>
	);
};

export default NavBar;
