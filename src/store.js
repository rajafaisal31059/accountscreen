import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice";
import userReducer from './userslice'
import productReducer from './productsSlice'

export const store = configureStore({
    reducer:{
        counter: counterReducer,
        user: userReducer,
        product: productReducer
    }

});
