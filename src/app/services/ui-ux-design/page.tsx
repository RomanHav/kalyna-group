import { Metadata } from 'next';
import UiUxDesign from './UiUxDesign';

export const metadata: Metadata = {
  title: 'Your Ideal User Experience Awaits You | Kalyna Group',
  description: 'Delight users with intuitive and beautiful interfaces.',
  metadataBase: new URL(`https://www.kalynagroup.space/services/ui-ux-design`),
  openGraph: {
    title: 'Your Ideal User Experience Awaits You | Kalyna Group',
    description: 'Delight users with intuitive and beautiful interfaces.',
    url: `https://www.kalynagroup.space/services/ui-ux-design`,
  },
};
export default function LandingPagePage() {
  return <UiUxDesign />;
}
