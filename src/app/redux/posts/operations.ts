import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_RENDER_API;

export const createPost = createAsyncThunk(
  'posts/createPost',
  async (
    {
      images,
      description,
      link,
    }: { images: File[]; description: string; link: string },
    { rejectWithValue }
  ) => {
    try {
      const formData = new FormData();
      images.forEach(image => formData.append('images', image));
      formData.append('description', description);
      formData.append('link', link);

      const response = await axios.post('/posts', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to create post');
    }
  }
);

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/posts');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to fetch posts');
    }
  }
);

export const deletePost = createAsyncThunk(
  'posts/deletePosts',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/posts/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to fetch posts');
    }
  }
);

export const updatePost = createAsyncThunk(
  'posts/updatePost',
  async (
    {
      id,
      images,
      removedImages,
      description,
      link,
    }: {
      id: string;
      images: File[];
      removedImages: string[];
      description: string;
      link: string;
    },
    { rejectWithValue }
  ) => {
    try {
      const formData = new FormData();
      images.forEach(image => formData.append('images', image));
      formData.append('removedImages', JSON.stringify(removedImages));
      formData.append('description', description);
      formData.append('link', link);
      console.log('FormData entries:');
      for (const pair of formData.entries()) {
        console.log(pair[0], pair[1]);
      }

      const response = await axios.patch(`/posts/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to create post');
    }
  }
);
