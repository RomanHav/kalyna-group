'use client';
import React, { useEffect, useState } from 'react';
import StartingLoader from '@/app/components/StartingLoader/StartingLoader';

export default function RenderLoading({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);
  return <>{loading ? <StartingLoader /> : children}</>;
}
