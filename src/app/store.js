import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cartSlice'
import productReducer from '../features/productsSlice'
import apiReducer from '../features/apiSlice'

export const store = configureStore({
    reducer:{
        allCart:cartReducer,
        products:productReducer,
        api:apiReducer,
    }
})