import React,{useState,useEffect, useContext} from "react";
import genreids from "../constants/Genre";
import { set } from "mongoose";
import { WatchListContext } from "../context/WatchListContext";



function WatchList() {
  // const [watchList,setWatchList] = useState([]);
  

  const { watchlist, setWatchlist} = useContext(WatchListContext)

  const [search , setSearch] = useState("");
  const [genreList,setGenreList] = useState(["All genre","thiller","Action","Comedy","Drama","Romance"]);
  const [currentGenre,setCurrentGenre] = useState("All genre");


  const handleSearch = (e) =>{
    setSearch(e.target.value);
  }

  const handleFilter = (genre) =>{
    setCurrentGenre(genre);
  }

  useEffect(() =>{
    const moviesFromLocalStorage = JSON.parse(localStorage.getItem('movies'));

    if(moviesFromLocalStorage){
      setWatchlist(moviesFromLocalStorage);
    }
  },[]);

  useEffect(() =>{
    //there can be 10 movies belonging to thriller, action , comedy genre
    let temp = watchlist.map(movie =>{
      return genreids[movie.genre_ids[0]]
    })
    temp = new Set(temp);
    setGenreList(["All genre",...temp]);
  },[watchlist]);



  const genre = (genre_id) =>{
    return genreids[genre_id];
  }

  const handleAscendingRating =() =>{
    console.log("ascending rating");
    const sortAscending = watchlist.sort((moviesObjA, moviesObjB) =>{
      return moviesObjA.vote_average - moviesObjB.vote_average;
    });
    setWatchlist([...sortAscending]);
  }

  const handlerDescendingRating =() =>{
    console.log("descending rating");
    const sortDescending = watchlist.sort((moviesObjA, moviesObjB) =>{
      return moviesObjB.vote_average - moviesObjA.vote_average;
    });
    setWatchlist([...sortDescending]);
  }
  const Genre = () =>(
    <div className="flex justify-center m-4">
      {genreList.map((genre)=> {
        const isActive = genre === currentGenre;
        const baseStyle = "flex justify-center items-center m-2 px-4 h-10 rounded-lg hover:cursor-pointer ";
        const bgColor = isActive ? "bg-blue-600": "bg-gray-300/50 hover:bg-gray-300/70";
        return( <div onClick={() => handleFilter(genre)} className={`${baseStyle} ${bgColor}`}>
          {genre}
          </div>
        );  
      })}
    </div>
  );

  const filterMovies = () => {
    return watchlist
    .filter(movie =>{
        if(currentGenre === "All genre"){
          return true;
        }else{
          return genreids[movie.genre_ids[0]] == currentGenre;
        }
        })
    .filter(movie => {
      return movie.title.toLowerCase().includes(search.toLowerCase());
      })
  }
return (
  <>
    <Genre />
    <div className="flex justify-center m-5">
      <input
      placeholder="Search for a movie"
      className="h-12 w-[18rem] bg-gray-200 px-4 outline-none border-black"
      type="text"
      onChange={handleSearch}
      value={search}
      />
      </div>
    <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
      <table className="w-full border-collapse bg-white text-left text-sm
      text-gray-500">
        <thead>
        <tr className="bg-gray-50">
          <th className="px-6 py-4 font-medium text-gray-900">Name
          </th>
          <th>
            <div className="flex">
              <div>
                <i onClick={handleAscendingRating} className="fa-solid fa-arrow-up mx-1 hover:cursor-pointer"></i>
                Ratings
                <i onClick={handlerDescendingRating} className="fa-solid fa-arrow-down mx-1 hover:cursor-pointer"></i>
                </div>
            </div>
          </th>
          <th>
            <div className="flex">
            <div>Popularity</div>
            </div>
          </th>
          <th>
            <div className="flex">
            <div>Genre</div>
            </div>
          </th>
        </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
          {filterMovies()
          .map((movies) =>(
            <tr className="hover:bg-gray-50" key={movies.id}>
            <td className="flex items-center px-6 py-4 font-normal text-gray-900">
          <img className="h-24 w-40 object-fit object-cover" src={`https://image.tmdb.org/t/p/original${movies.backdrop_path}`} alt="" />
          <div className="font-medium text-gray-700 text-sm flex-10 text align-bottom">{movies.title}</div>
            </td>
            <td className="pl-6 py-4">{movies.vote_average
  }</td>
            <td className="pl-6 py-4">{movies.popularity
  }</td>
            <td className="pl-2 py-4">{genre(movies.genre_ids[0])}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}
export default WatchList;