import Link from "next/link";
import React from "react";

const ServicesPage: React.FC = () => {
    return (
        <div className={'flex flex-col justify-center items-center gap-10 relative pt-40 mb-20 text-white'}>
            <Link href={'/services/e-commerce'}>
                E-commerce
            </Link>
            <Link href={'/services/landing-page'}>
                Landing Page
            </Link>
            <Link href={'/services/business-website'}>
                Business Website
            </Link>
            <Link href={'/services/ui-ux-design'}>
                UI/UX Design
            </Link>
            <Link href={'/services/3d-design'}>
                3D Design
            </Link>
            <Link href={'/services/crm-system'}>
                CRM System
            </Link>
        </div>
    )
}

export default ServicesPage;