import React from 'react'
import { Link } from 'react-router-dom'
import {useState , useEffect, useContext} from "react"
import Pagination from './Pagination'
import MovieCard from './MovieCard'
//import axios from 'axios'
import { WatchListContext } from '../context/WatchListContext'
import paginationSlice from '../redux/paginationSlice'
import fetchMiddleware from "../redux/User/movieMiddleware"
import { useDispatch, useSelector } from 'react-redux'

function Movies() {


  // const [movies, setMovies] = useState([]);
  // // const [pageNo, setPageNo] = useState(1);
  // const {watchlist,addWatchlist,removeFromWatchlist} = useContext(WatchListContext);
  const {error , loading, movies} = useSelector((state) =>{
    return state.movie;
  })
  const {pageNo} = useSelector((state) => state.pagination);
  const dispatch = useDispatch();

  const {watchlist, addWatchlist, removeFromWatchlist} = useContext(WatchListContext);

  // useEffect(() => {
  //   console.log("useEffect fetched data");

  //   axios
  //     .get(
  //       `https://api.themoviedb.org/3/trending/movie/day?api_key=e8de446ab4eaaf447ecfe5e4ec182fac&language=en-US&page=${pageNo}`
  //     )
  //     .then(response => {
  //       console.log("movies data", response.data.results);
  //       setMovies(response.data.results);
  //     })
  //     .catch(error => console.error("Error fetching data:", error));
  // }, [pageNo]);

  useEffect(() => {
    dispatch(fetchMiddleware(pageNo));
  },[dispatch, pageNo]);

  const handlerNextPage = () => {
    // setPageNo(pageNo + 1);
    // console.log(paginationSlice);
    dispatch(paginationSlice.actions.handleNext());
  };

  const handlerPrevPage = () => {
    // if (pageNo > 1) {
    //   setPageNo(pageNo - 1);
    // }
    dispatch(paginationSlice.actions.handlePrev());
  };


  // if(loading){
  //   return <h1>Loading..</h1>
  // }
  // if(error){
  //   return <h1>SomeThing went wrong</h1>
  // }

  return (
    <div>
      <div className="text-2xl font-bold text-center m-5">
        <h1>Trending movies</h1>
      </div>

      <div className="flex justify-evenly flex-wrap gap-8">
        {movies.map((movieObj) => {
            return<MovieCard movieObj={movieObj} addtoWatchlist={addWatchlist}watchlist={watchlist} removeFromWatchlist={removeFromWatchlist}/>
    })}
      </div>

      <Pagination
        nextPagefn={handlerNextPage}
        prevPagefn={handlerPrevPage}
        PageNo={pageNo}
      />
    </div>
  );
}




export default Movies