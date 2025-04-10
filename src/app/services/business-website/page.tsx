import type { Metadata } from 'next';
import BusinessWebsite from './BusinessWebsite';

export const metadata: Metadata = {
  title: 'Your Perfect Business Website Awaits You | Kalyna Group',
  description:
    'Innovate, Inspire, Impress, Succeed with a perfect business website.',
  metadataBase: new URL(
    `https://www.kalynagroup.space/services/business-website`
  ),
  openGraph: {
    title: 'Your Perfect Business Website Awaits You | Kalyna Group',
    description:
      'Innovate, Inspire, Impress, Succeed with a perfect business website.',
    url: `https://www.kalynagroup.space/services/business-website`,
  },
};

export default function BusinessWebsitePage() {
  return <BusinessWebsite />;
}
