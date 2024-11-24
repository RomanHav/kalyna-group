import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import React from 'react';
import { GoogleAnalytics } from '@next/third-parties/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Kalyna Group',
  description: 'Create an Effective Website for Your Business With Us',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased relative`}>
        <div className="bg-texture absolute inset-0 top-0 left-0 w-full h-full bg-repeat-y lg:bg-cover opacity-20"></div>
        {children}
        <script
          async
          type="text/javascript"
          src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=RMPKqS"
        ></script>
        <script
          async
          type="text/javascript"
          src="https://assets.calendly.com/assets/external/widget.js"
        ></script>
      </body>
      <GoogleAnalytics gaId="G-WNLWD75BW9" />
    </html>
  );
}
