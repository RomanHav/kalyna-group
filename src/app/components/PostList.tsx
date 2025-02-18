'use client';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '@/app/redux/posts/operations';
import { selectPosts, selectLoading } from '@/app/redux/posts/selectors';
import { AppDispatch } from '@/app/redux/store';
import PostCard from './PostCard';
import { CircularProgress } from '@mui/material';
import { nanoid } from 'nanoid';

const PostList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const posts = useSelector(selectPosts);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold mb-4">Published Posts</h2>
      {loading ? (
        <div className="flex justify-center">
          <CircularProgress />
        </div>
      ) : posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {posts.map(post => (
            <PostCard
              key={nanoid()}
              images={post.images}
              description={post.description}
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No posts available</p>
      )}
    </div>
  );
};

export default PostList;
