'use client';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@/app/redux/store';
import { fetchPosts } from '@/app/redux/posts/operations';
import { selectPosts } from '@/app/redux/posts/selectors';
import BlogPostCard from '@/app/components/BlogPostCard';

const BlogPostList: React.FC = () => {
  const posts = useSelector(selectPosts);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className={'relative w-full text-white'}>
      <ul className={'flex flex-wrap justify-start gap-10'}>
        {posts.map(post => (
          <li
            className={
              'p-5 rounded-lg group transition-all duration-300 border-[0.5px] border-transparent hover:border-b-emerald-200 lg:w-80 bg-white/5 backdrop-blur'
            }
            key={post._id}
          >
            <BlogPostCard
              link={post.link}
              description={post.description}
              images={post.images}
              createdAt={post.createdAt}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPostList;
