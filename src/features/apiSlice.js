// apiSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchApiData = createAsyncThunk(
  'api/fetchApiData',
  async () => {
    const response = await axios.get('https://dummyjson.com/products');
    return response.data.products;
  }
);

const apiSlice = createSlice({
  name: 'api',
  initialState: {
    data: [],
    loading: 'idle',
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchApiData.pending, (state) => {
        state.loading = 'loading';
      })
      .addCase(fetchApiData.fulfilled, (state, action) => {
        state.loading = 'idle';
        state.data = action.payload;  
      })
      .addCase(fetchApiData.rejected, (state, action) => {
        state.loading = 'idle';
        state.error = action.error.message;
      });
  },
});

export const selectApiData = (state) => state.api.data;

export default apiSlice.reducer;