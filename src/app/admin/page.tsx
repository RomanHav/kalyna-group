'use client';

import LogoutButton from '../components/LogoutButton';
import React from 'react';
import PostForm from '@/app/components/PostForm';
import PostList from '@/app/components/PostList';

export default function AdminDashboard() {
  return (
    <div
      className={`py-20 px-4 md:px-8 lg:px-16 relative flex flex-col flex-wrap items-center gap-10 z-[80] justify-center `}
    >
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
