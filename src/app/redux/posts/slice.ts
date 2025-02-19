import { createSlice } from '@reduxjs/toolkit';
import { createPost, deletePost, fetchPosts } from './operations';

interface Post {
  _id: string;
  images: string[];
  description: string;
  link: string;
}

interface PostState {
  posts: Post[];
  loading: boolean;
  error: string | null;
}

const initialState: PostState = {
  posts: [],
  loading: false,
  error: null,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      //create
      .addCase(createPost.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createPost.fulfilled, state => {
        state.loading = false;
      })
      .addCase(createPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      //get posts
      .addCase(fetchPosts.pending, state => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload.data;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      //delete posts
      .addCase(deletePost.pending, state => {
        state.loading = true;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default postsSlice.reducer;
