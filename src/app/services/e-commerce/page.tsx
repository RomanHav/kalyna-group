import type { Metadata } from 'next';
import ECommerce from './ECommerce';

export const metadata: Metadata = {
  title: 'Build Your Online Store with us | Kalyna Group',
  description:
    'Launch your e-commerce business with a cutting-edge online store.',
  metadataBase: new URL(`https://www.kalynagroup.space/services/e-commerce`),
  openGraph: {
    title: 'Build Your Online Store with us | Kalyna Group',
    description:
      'Launch your e-commerce business with a cutting-edge online store.',
    url: `https://www.kalynagroup.space/services/e-commerce`,
  },
};

export default function EcommercePage() {
  return <ECommerce />;
}
