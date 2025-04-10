import type { Metadata } from 'next';
import CrmSystem from './CrmSystem';

export const metadata: Metadata = {
  title: 'Your Ideal CRM Solution Awaits You | Kalyna Group',
  description: 'Click, Connect, Convert, Complete with our CRM solution.',
  metadataBase: new URL(`https://www.kalynagroup.space/services/crm-system`),
  openGraph: {
    title: 'Your Ideal CRM Solution Awaits You | Kalyna Group',
    description: 'Click, Connect, Convert, Complete with our CRM solution.',
    url: `https://www.kalynagroup.space/services/crm-system`,
  },
};

export default function BusinessWebsitePage() {
  return <CrmSystem />;
}
