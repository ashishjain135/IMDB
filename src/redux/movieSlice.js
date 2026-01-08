// to create a slice ->> redux
import {createSlice} from "@reduxjs/toolkit"


const moviesSlice = createSlice({
    name:"moviesSlice",
    //inital state value
    initialState:{
        movies:[],
        error:null,
        loading:true

    },
    // functions to update your state 
    reducers:{
        movieLoading:(state, action) =>{
            state.error = null;
            state.loading = action.payload;
        },
        movieError:(state) =>{
            state.error = action.payload;
            state.loading = false;
        },
        movieData:(state, action) =>{
            state.loading = false;
            state.error = null;
            state.movies = action.payload
        }
    }
})

export default moviesSlice;