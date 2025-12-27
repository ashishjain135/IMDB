//step 1 create the context

import React, {createContext, useState, useEffect} from 'react';
const WatchListContext = createContext();
//import {Link} from 'react-router-dom'


//step 2 create the provider component
export default function WatchListProvider ({children}){
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
  
    return (
        <WatchListContext.Provider value={{addWatchlist, removeFromWatchlist, watchlist,setWatchlist }}>
            {children}
        </WatchListContext.Provider>
    )
}



//every thing in between in tag becomes children prop
//and gives access by a special prop called children
{/* <Comp1>
    <NestedComp1/>
</Comp1> */}

export {WatchListContext};
