'use client';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, fetchPosts } from '@/app/redux/posts/operations';
import { selectPosts, selectLoading } from '@/app/redux/posts/selectors';
import { AppDispatch } from '@/app/redux/store';
import PostCard from './PostCard';
import { CircularProgress } from '@mui/material';

const PostList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const posts = useSelector(selectPosts);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  const handleDelete = async (id: string) => {
    try {
      await dispatch(deletePost(id)).unwrap();
    } catch (error) {
      console.error('Delete error:', error);
    }
  };

  return (
    <div className="mt-6">
      <h2 className="text-2xl text-white font-semibold mb-4">
        Published Posts
      </h2>
      {loading ? (
        <div className="flex justify-center">
          <CircularProgress />
        </div>
      ) : posts.length > 0 ? (
        <div className="flex flex-wrap">
          {posts.map(post => (
            <PostCard
              key={post._id}
              id={post._id}
              images={post.images}
              description={post.description}
              link={post.link}
              onDelete={() => handleDelete(post._id)}
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
