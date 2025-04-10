import type { Metadata } from 'next';
import ThreeDSystem from './ThreeDSystem';

export const metadata: Metadata = {
  title: 'Your Perfect 3D Design Awaits You | Kalyna Group',
  description: 'Bring your ideas to life with stunning 3D designs.',
  metadataBase: new URL(`https://www.kalynagroup.space/services/3d-design`),
  openGraph: {
    title: 'Your Perfect 3D Design Awaits You | Kalyna Group',
    description: 'Bring your ideas to life with stunning 3D designs.',
    url: `https://www.kalynagroup.space/services/3d-design`,
  },
};

export default function ThreeDSystemPage() {
  return <ThreeDSystem />;
}
