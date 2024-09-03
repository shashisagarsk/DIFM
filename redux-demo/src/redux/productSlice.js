import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Simulate an API call to fetch products
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  // Replace with actual API URL if you have a backend
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();
  return data;
});

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
