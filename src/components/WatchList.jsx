import React,{useState,useEffect} from "react";
import genreids from "../constants/Genre";

function WatchList() {
  const [watchList,setWatchList] = useState([]);

  useEffect(() =>{
    const moviesFromLocalStorage = JSON.parse(localStorage.getItem('movies'));

    if(moviesFromLocalStorage){
      setWatchList(moviesFromLocalStorage);
    }
  },[]);

  const genre = (genre_id) =>{
    return genreids[genre_id];
  }

  const handleAscendingRating =() =>{
    console.log("ascending rating");
    const sortAscending = watchList.sort((moviesObjA, moviesObjB) =>{
      return moviesObjA.vote_average - moviesObjB.vote_average;
    });
    setWatchList([...sortAscending]);
  }

  const handlerDescendingRating =() =>{
    console.log("descending rating");
    const sortDescending = watchList.sort((moviesObjA, moviesObjB) =>{
      return moviesObjB.vote_average - moviesObjA.vote_average;
    });
    setWatchList([...sortDescending]);
  }

return (
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
        {watchList.map((movies) =>(
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
  );
}
export default WatchList;