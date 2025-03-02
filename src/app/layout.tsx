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
import GoogleAnalitycsWrapper from './components/GoogleAnalitycsWrapper';
import CookieBanner from './components/CookieBaner';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.kalynagroup.space'),
  title: 'Kalyna Group',
  description: 'Create an effective website for your Business with us',
  openGraph: {
    images: '/meta-image.jpg',
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
              <RenderLoading>
                <div className="absolute inset-0 top-0 left-0 h-full w-full bg-repeat-y opacity-20 bg-texture lg:bg-cover"></div>
                <GoogleAnalitycsWrapper />
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
