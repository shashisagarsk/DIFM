import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch categories from API
export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
  const response = await axios.get('https://api.escuelajs.co/api/v1/products');  // Update with your API URL
  return response.data;
});

const categorySlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    loading: false,
    error: null,
  },
  reducers: {
    filterCategory: (state, action) => {
      state.categories = state.categories.filter((category) => category.name === action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { filterCategory } = categorySlice.actions;
export default categorySlice.reducer;
