import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import React from 'react';
import ReactLenisUpdated from '@/app/utils/lenis';
import NavBar from '@/app/components/NavBar/NavBar';
import Footer from '@/app/components/Footer/Footer';
import { ParallaxProvider } from './utils/parallax';
import { Provider, store } from './utils/provider';
import RenderLoading from '@/app/utils/RenderLoading';

import GoogleAnalyticsWrapper from './components/GoogleAnalitycsWrapper';

import CookieBanner from './components/CookieBanner';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.kalynagroup.space'),
  title: 'Kalyna Group | Web Application Development for Your Business',
  description:
    'User-friendly, fast, and functional websites designed to drive sales and automate processes.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.kalynagroup.space',
    siteName: 'Kalyna Group',
    title: 'Kalyna Group | Web Application Development for Your Business',
  },
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
              <GoogleAnalyticsWrapper />
              <RenderLoading>
                <div className="absolute inset-0 top-0 left-0 h-full w-full bg-repeat-y opacity-20 bg-texture lg:bg-cover"></div>
                <CookieBanner />
                <NavBar />
                {children}
                <Footer />
              </RenderLoading>
            </ParallaxProvider>
          </ReactLenisUpdated>
        </Provider>
      </body>
    </html>
  );
}
