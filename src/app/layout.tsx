import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Script from 'next/script';
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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={`${poppins.className} antialiased relative`}>
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-5KXQXRR2');`,
          }}
        />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5KXQXRR2"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <div className="bg-texture absolute inset-0 top-0 left-0 w-full h-full bg-repeat-y lg:bg-cover opacity-20"></div>
        {children}
        <Script
          strategy="afterInteractive"
          src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=RMPKqS"
        />
        <Script
          strategy="afterInteractive"
          src="https://assets.calendly.com/assets/external/widget.js"
        />
        <GoogleAnalytics gaId="G-WNLWD75BW9" />
      </body>
    </html>
  );
}
