import React from 'react';
import BlogPostList from '@/app/components/BlogPostList';

const BlogPage: React.FC = () => {
  return (
    <div
      className={
        'relative pt-40 pb-20 gap-20 flex flex-col justify-center items-center lg:px-20'
      }
    >
      <h2 className={'text-4xl max-lg:text-center text-white uppercase'}>
        <span className={'text-custom-player-one'}>Kalyna group</span> Newsroom
      </h2>
      <BlogPostList />
    </div>
  );
};

export default BlogPage;
