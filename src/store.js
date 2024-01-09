import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice";
import userReducer from './userslice'
import productReducer from './productsSlice'
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { api } from "./api";

export const store = configureStore({
    reducer:{
        counter: counterReducer,
        user: userReducer,
        product: productReducer,
        [api.reducerPath]:api.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),

});

setupListeners(store.dispatch)
