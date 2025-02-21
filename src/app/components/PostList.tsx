'use client';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, fetchPosts } from '@/app/redux/posts/operations';
import { selectPosts, selectLoading } from '@/app/redux/posts/selectors';
import { AppDispatch } from '@/app/redux/store';
import PostCard from './PostCard';
import { PacmanLoader } from 'react-spinners';

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
      dispatch(fetchPosts());
    } catch (error) {
      console.error('Delete error:', error);
    }
  };

  return (
    <div className="relative flex flex-col items-center gap-5 w-full z-40 mt-6 lg:px-20">
      <h2 className="text-4xl text-white font-semibold mb-4">
        Published Posts
      </h2>
      {loading ? (
        <div className="flex justify-center">
          <PacmanLoader size={32} color={'#ffffff'} />
        </div>
      ) : posts.length > 0 ? (
        <div className="flex flex-wrap justify-center items-start gap-10 w-full">
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
