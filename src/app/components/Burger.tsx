import Link from "next/link";
import { IoMdClose } from "react-icons/io";
interface BurgerProps{
    handleClick: () => void,
    isOpen: boolean
}

const Burger:React.FC<BurgerProps>=({handleClick, isOpen}) =>{
    return (
        <div className={`bg-black bg-cover absolute top-0 right-0 w-full h-full bg-opacity-70 z-30 transform scale-y- transition-transform duration-300 ease-out ${isOpen ? "" : "hidden"}`}>
            <div className="w-full h-full absolute inset-0 opacity-20"></div>
            <nav className="flex flex-col items-center justify-center h-full relative z-20 text-white uppercase text-2xl gap-6">
            <Link  href={'/services'}>Services</Link>
            <Link href={'/about-us'}>About us</Link>
            <Link href={'/benefits'}>Benefits</Link>
            <Link href={'/cases'}>Cases</Link>
            </nav>
            <IoMdClose size={35} className="absolute top-7 right-6 z-20 fill-white" onClick={handleClick}/>
        </div>
    ) 
}

export default Burger;