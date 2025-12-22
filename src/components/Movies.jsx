import React from 'react'
import { Link } from 'react-router-dom'
import {useState , useEffect} from "react"
import Pagination from './Pagination'
import MovieCard from './MovieCard'
import axios from 'axios'

function Movies() {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [watchlist, setWatchlist] = useState
  ([]);

  useEffect(() => {
    const moviesFromLocalStorage = JSON.parse(localStorage.getItem("movies"));
    if(moviesFromLocalStorage){
        setWatchlist(moviesFromLocalStorage);
    }
  },[])

  const addWatchlist = (movieObj) => {
    const updateWatchlist = [...watchlist, movieObj];
    setWatchlist(updateWatchlist);
    localStorage.setItem("movies",JSON.stringify(updateWatchlist));
  }


  const removeFromWatchlist = (movieObj) => {
    let filteredMovies = watchlist.filter((movie) => {
        return movie.id !== movieObj.id //return all those movies whose id is not equal to movieObj.id
    });   
    setWatchlist(filteredMovies);
    localStorage.setItem("movies",JSON.stringify(filteredMovies));
  };
  console.log("watchlist", watchlist);
  
  
  
  useEffect(() => {
    console.log("useEffect fetched data");

    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=e8de446ab4eaaf447ecfe5e4ec182fac&language=en-US&page=${pageNo}`
      )
      .then(response => {
        console.log("movies data", response.data.results);
        setMovies(response.data.results);
      })
      .catch(error => console.error("Error fetching data:", error));
  }, [pageNo]);

  const handlerNextPage = () => {
    setPageNo(pageNo + 1);
  };

  const handlerPrevPage = () => {
    if (pageNo > 1) {
      setPageNo(pageNo - 1);
    }
  };

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