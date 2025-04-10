import { redirect } from 'next/navigation';
import { Metadata } from 'next';

const SERVICES_META: Record<string, Metadata> = {
  'e-commerce': {
    title: 'Build Your Online Store with us | Kalyna Group',
    description:
      'Launch your e-commerce business with a cutting-edge online store.',
  },
  'business-website': {
    title: 'Your Perfect Business Website Awaits You | Kalyna Group',
    description:
      'Innovate, Inspire, Impress, Succeed with a perfect business website.',
  },
  'landing-page': {
    title: 'Your Perfect Landing Page Awaits You | Kalyna Group',
    description:
      'Capture leads and drive conversions with a perfect landing page.',
  },
  'crm-system': {
    title: 'Your Ideal CRM Solution Awaits You | Kalyna Group',
    description: 'Click, Connect, Convert, Complete with our CRM solution.',
  },
  'ui-ux-design': {
    title: 'Your Ideal User Experience Awaits You | Kalyna Group',
    description: 'Delight users with intuitive and beautiful interfaces.',
  },
  '3d-design': {
    title: 'Your Perfect 3D Design Awaits You | Kalyna Group',
    description: 'Bring your ideas to life with stunning 3D designs.',
  },
};

export async function generateMetadata({
  params,
}: {
  params: { service: string };
}): Promise<Metadata> {
  const serviceMeta = SERVICES_META[params.service];

  if (!serviceMeta) {
    return {
      title: 'Service Not Found | Kalyna Group',
      description: 'This service does not exist.',
    };
  }

  return {
    ...serviceMeta,
    metadataBase: new URL(
      `https://www.kalynagroup.space/services/${params.service}`
    ),
    openGraph: {
      title: serviceMeta.title,
      description: serviceMeta.description,
      url: `https://www.kalynagroup.space/services/${params.service}`,
    },
  };
}

export default function ServicesRedirect() {
  redirect('/services/e-commerce');
}
