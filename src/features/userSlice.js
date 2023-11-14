// src/features/user/userSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk for fetching user data
export const fetchRedditData = createAsyncThunk(
  'user/fetchRedditData',
  async (username, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://www.reddit.com/user/${username}/comments.json`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: null,
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {
    // ... other reducers ...
  },
  extraReducers: {
    [fetchRedditData.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchRedditData.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.data = action.payload;
    },
    [fetchRedditData.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer;
