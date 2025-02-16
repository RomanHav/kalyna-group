import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import React from 'react';
import ReactLenisUpdated from '@/app/utils/lenis';
import { GoogleAnalytics } from '@next/third-parties/google';
import NavBar from '@/app/components/NavBar/NavBar';
import Footer from '@/app/components/Footer/Footer';
import { ParallaxProvider } from './utils/parallax';
import { Provider, store } from './utils/provider';
import RenderLoading from '@/app/utils/RenderLoading';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'Kalyna Group',
  description: 'Create an Effective Website for Your Business With Us',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} lg:overflow-hidden relative`}>
        <Provider store={store}>
          <ReactLenisUpdated>
            <ParallaxProvider>
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
              <RenderLoading>
                <div className="absolute inset-0 top-0 left-0 h-full w-full bg-repeat-y opacity-20 bg-texture lg:bg-cover"></div>
                <NavBar />
                {children}
                <Footer />
              </RenderLoading>
              <GoogleAnalytics gaId="G-WNLWD75BW9" />
            </ParallaxProvider>
          </ReactLenisUpdated>
        </Provider>
      </body>
    </html>
  );
}
