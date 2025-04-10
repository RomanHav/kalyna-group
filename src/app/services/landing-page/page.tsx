import { Metadata } from 'next';
import LandingPage from './LandingPage';
export const metadata: Metadata = {
  title: 'Your Perfect Landing Page Awaits You | Kalyna Group',
  description:
    'Capture leads and drive conversions with a perfect landing page.',
  metadataBase: new URL(`https://www.kalynagroup.space/services/landing-page`),
  openGraph: {
    title: 'Your Perfect Landing Page Awaits You | Kalyna Group',
    description:
      'Capture leads and drive conversions with a perfect landing page.',
    url: `https://www.kalynagroup.space/services/landing-page`,
  },
};
export default function LandingPagePage() {
  return <LandingPage />;
}
