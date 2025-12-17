import React from 'react'
import { Link } from 'react-router-dom';
import {useState} from "react"
import Pagination from './Pagination';
import MovieCard from './MovieCard';



function Movies() {
    const [movies, setMovies] = React.useState([
        {
            url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW92aWV8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
            title: 'Movie 1',
            rating: 4.5
        },
        {
            url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW92aWV8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
            title: 'Movie 2',
            rating: 4.5
        },
        {
            url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW92aWV8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
            title: 'Movie 3',
            rating: 4.5
        },
        {
            url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW92aWV8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
            title: 'Movie 4',
            rating: 4.5
        },
        {
            url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW92aWV8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
            title: 'Movie 5',
            rating: 4.5
        },
        {
            url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW92aWV8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
            title: 'Movie 6',
            rating: 4.5
        }
    ]);
    const [pageNo, setPageNo] = useState(1);

    const handlerNextPage = () => {
        setPageNo(pageNo + 1);
    }
    const handlerPrevPage = () => {
        if(pageNo > 1){
            setPageNo(pageNo - 1);
        }else{
            setPageNo(1);

        }
    }    
  return (
    <div>
        <div className='text-2xl font-bold text-center m-5'>
            <h1>Trending movies</h1>
        </div>
        <div className='flex justify-evenly flex-wrap gap-8'> 
            { movies.map((movieObj) => {
                return (
                    <MovieCard movieObj={movieObj} />
                );
            })}
        </div>
        <Pagination nextPagefn={handlerNextPage} prevPagefn={handlerPrevPage} PageNo={pageNo} />
    </div>
  );
}

export default Movies