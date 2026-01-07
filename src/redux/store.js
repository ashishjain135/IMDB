import {configureStore} from "@reduxjs/toolkit";  // it is used to configure the redux store or create store 


import counterReducer from "./counterSlice.js"; //importing the slice reducer
import todoReducer from "./todoSlices";
import paginationSlice from "./paginationSlice";
import userSlice from "./User/userSlice.js";

const store = configureStore({
    reducer: {
        counter: counterReducer,   // adding the slice reducer to the store
        todo: todoReducer,
        pagination: paginationSlice.reducer,
        user: userSlice.reducer
    },
});

export default store;