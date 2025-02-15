import React from 'react';
import Link from 'next/link';
import { RiArrowDropRightLine } from 'react-icons/ri';

interface NavServicesProps {
  isOpen?: boolean;
  handleCloseService?: () => void;
  handleOpenService?: () => void;
}

const links = [
  {
    id: 1,
    title: 'E-commerce',
    descr:
      'Create an engaging online store that boosts your sales and enhances customer experience.',
    href: '/services/e-commerce',
  },
  {
    id: 2,
    title: 'Landing Page',
    descr:
      'Craft a compelling single-page website designed to maximize conversions and capture leads.',
    href: '/services/landing-page',
  },
  {
    id: 3,
    title: 'Business Website',
    descr:
      'Establish a strong online presence with a professional website tailored to your business needs.',
    href: '/services/business-website',
  },
  {
    id: 4,
    title: 'UI/UX Design',
    descr:
      'Enhance user satisfaction with intuitive and aesthetically pleasing interfaces that drive engagement.',
    href: '/services/ui-ux-design',
  },
  {
    id: 5,
    title: '3D design',
    descr:
      'Bring your ideas to life with stunning 3D visuals, from product models to immersive environments.',
    href: '/services/3d-design',
  },
  {
    id: 6,
    title: 'CRM System',
    descr:
      'Optimize your customer relationships with a tailored CRM system that streamlines your business operations.',
    href: '/services/crm-system',
  },
];

const NavServices: React.FC<NavServicesProps> = ({ handleCloseService }) => {
  return (
    <div
      className={`w-full h-full hidden lg:flex justify-center items-center text-white`}
    >
      <ul className={'flex *:w-[14%] justify-between'}>
        {links.map(link => (
          <li key={link.id} className={'flex flex-col items-start gap-3.5'}>
            <Link
              onClick={handleCloseService}
              className={
                'flex w-full items-center justify-between relative text-lg cursor-pointer tracking-wide after:absolute after:-bottom-2 after:left-0 after:h-[1px] after:w-0 after:bg-white hover:after:w-full hover:after:duration-200'
              }
              href={link.href}
            >
              {link.title}
              <RiArrowDropRightLine size={30} />
            </Link>
            <p className={'text-gray-400 text-sm'}>{link.descr}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavServices;
