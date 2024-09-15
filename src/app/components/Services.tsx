import ServicePart from "./ServicePart";
import Title from "./Title";
interface ServiceInfo {
	id?: number;
	title: string;
	src: string;
	price: string;
}

interface ServiceProps {
	info: ServiceInfo[];
}

const Services: React.FC<ServiceProps> = ({ info }) => {
	return (
		<div className="flex flex-col my-8 px-[45px] relative z-10 gap-10">
			<Title title="services" />
			<ul className="flex flex-col items-center gap-9">
				{info.map((infopart) => {
					return (
						<li
							key={infopart.id}
							className="bg-[#A3FFEB]/20 flex items-center rounded-3xl py-2 px-6"
						>
							<ServicePart
								title={infopart.title}
								src={infopart.src}
								price={infopart.price}
							/>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
export default Services;
