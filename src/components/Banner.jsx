import React , {use, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

function Banner(){
  const[bannerImage, setBannerImage] = React.useState('');
  const[title, setTitle] = React.useState('"placeholder title"');
  const[pageNo, setPageNo] = React.useState(1);
 
  
  useEffect(() => {
    axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=e8de446ab4eaaf447ecfe5e4ec182fac&language=en-US&page=1")
    .then((response) => {
        console.log("flims",response.data.results[0]);
        const firstmovie = response.data.results[0];
        const firstmovieTitle = firstmovie.title; 
        const firstmoviePoster = firstmovie.backdrop_path;
        setBannerImage(`https://image.tmdb.org/t/p/original${firstmoviePoster}`);
        setTitle(firstmovieTitle);
    })

},[]);
  return (
    <>
        <div className='h-[20vh md:h[75vh]bg-cover bg-center flex items-end 'style={
            {backgroundImage: `url(${bannerImage})`, height: '75vh'}
        }>
          <div className='text-white w-full text-center text-2xl'>{title}</div>
        </div>
    </>
  )
}

export default Banner