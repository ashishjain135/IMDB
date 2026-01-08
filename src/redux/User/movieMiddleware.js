import moviesSlice from "../movieSlice";
const actions = moviesSlice.actions;

// to send data to middleware
const fetchMovieMiddleware = (params) =>{
    // it automatically get the dispatch
    return async function(dispatch){
        try{
            dispatch(actions.movieLoading(true))
            const resp = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=e8de446ab4eaaf447ecfe5e4ec182fac&language=en-US&page=${params}`);
            const movieObj = await resp.json();
            
            dispatch(actions.movieData(movieObj.results))
        }catch(err){
            dispatch(actions.movieError());
        }finally{
            dispatch(actions.movieLoading(false));
        }
    }
}

export default fetchMovieMiddleware;