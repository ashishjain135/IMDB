import {configureStore} from "@reduxjs/toolkit";  // it is used to configure the redux store or create store 

import counterReducer from "./slices/counterSlice"; //importing the slice reducer

import todoReducer from "./todoSlices.js";

const store = configureStore({
    reducer: {
        counter: counterReducer,   // adding the slice reducer to the store
        todo: todoReducer
    },
});

export default store;