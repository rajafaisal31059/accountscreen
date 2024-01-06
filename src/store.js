import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice";
import userReducer from './userslice'

export const store = configureStore({
    reducer:{
        counter: counterReducer,
        user: userReducer
    }

});
