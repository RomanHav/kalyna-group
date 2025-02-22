import React, { ReactNode } from 'react';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
});

export default async function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await auth();

  if (!session) {
    redirect('/login');
  }

  return (
    <div
      className={`${poppins.className} fixed z-[999] w-full h-full overflow-y-auto bg-cover bg-test`}
      data-lenis-prevent={'true'}
    >
      <div className="fixed w-full h-full bg-black/40"></div>
      {children}
    </div>
  );
}
