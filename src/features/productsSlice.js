// productsSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { fetchApiData, selectApiData } from './apiSlice'

export const productsSlice = createSlice({
    name:'products',
    initialState:{
        items : [],
    },
    reducers:{
        filterProducts: (state, action) => {
            const { category } = action.payload;
            state.filteredProducts = state.items.filter(product => product.category === category);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchApiData.fulfilled, (state, action) => {
          state.items.push(...action.payload);
        });
      },
})

export const selectFilteredProducts = (state, category) => {
  const apiData = selectApiData(state);
  return apiData.filter((product) => product.category === category);
}

export const { filterProducts } = productsSlice.actions;

export default productsSlice.reducer;