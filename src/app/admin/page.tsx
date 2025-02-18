'use client';

import LogoutButton from '../components/LogoutButton';
import React from 'react';
import { Poppins } from 'next/font/google';
import PostForm from '@/app/components/PostForm';
import PostList from '@/app/components/PostList';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
});

export default function AdminDashboard() {
  return (
    <div
      className={`${poppins.className} py-20 relative flex flex-col z-[80] items-center justify-center bg-cover bg-test`}
    >
      {/*<div className="fixed w-full h-full bg-black/40"></div>*/}
      <div
        className={`relative bg-white p-6 rounded-lg flex flex-col gap-8 shadow-lg`}
      >
        <div className={`flex items-center gap-40`}>
          <h1 className={`text-3xl underline`}>Admin Dashboard</h1>
          <LogoutButton />
        </div>
        <PostForm />
      </div>
      <PostList />
    </div>
  );
}
