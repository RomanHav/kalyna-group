'use client';
import React, { useEffect, useState } from 'react';
import { ReactLenis } from 'lenis/react';

export default function ReactLenisUpdated({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    setMobile(window.innerWidth <= 768);
  }, []);
  return <ReactLenis root={!mobile}>{children}</ReactLenis>;
}
