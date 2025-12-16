import React from 'react'
import { Link } from 'react-router-dom';
import {useState} from "react"
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
  return (
    <div>
        <div className='text-2xl font-bold text-center m-5'>
            <h1>Trending movies</h1>
        </div>
        <div className='flex justify-evenly flex-wrap gap-8'> 
            { movies.map((movieObj) => {
                return (
                    <div className='h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex-col' style={{
                        backgroundImage:`url(${movieObj.url})`}}>
                        <div className='text-white w-full text-center text-xl p-2 bg-gray-900/70 rouded-lg'>{movieObj.title}</div>
                    </div>
                );
            })}
        </div>
    </div>
  );
}

export default Movies