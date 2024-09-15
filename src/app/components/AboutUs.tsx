import Image from "next/image";
import Title from "./Title";

const AboutUs = () => {
    return (
        <div className="flex flex-col my-8 px-[45px] relative z-10 gap-10">
            <Title title="About Us" />
            <div className="flex flex-col justify-center items-center bg-[#A3FFEB]/10 p-5 rounded-3xl">
                <div>
                    <Image className="w-[170px] mb-7" src={"/about-us.png"} alt="About Us Image" width={489} height={513}/>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <p className="text-base text-white mb-7"><span className="uppercase">Kalyna group</span> is an innovative web development company dedicated to helping businesses thrive in the digital world. We combine modern technology and a client-centric approach to deliver high-quality solutions tailored to your business needs.</p>
                    <p className="text-base text-white mb-4">Our team of professionals is committed to creating dynamic and scalable websites, applications, and platforms that enhance user experience and drive business growth. With a focus on detail, performance, and long-term partnerships.</p>
                    <button className="bg-gradient-to-r from-custom-green to-custom-blue text-white py-2 px-6 rounded uppercase text-[16px] font-semibold flex mb-4">Write us</button>
                    <p className="font-medium text-xl text-white"><span className="uppercase">Kalyna group</span> - is your reliable partner in digital transformation!</p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;