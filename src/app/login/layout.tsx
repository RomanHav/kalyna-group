import { ReactNode } from 'react';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export default async function LoginLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await auth();

  if (session) {
    redirect('/admin');
  }

  return <div>{children}</div>;
}
