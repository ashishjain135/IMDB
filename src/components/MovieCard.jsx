import React from 'react'

function MovieCard({movieObj, addtoWatchlist,watchlist, removeFromWatchlist}) {
  const doesContain = (movieObj) =>{
    for(let i=0;i<watchlist.length;i++){
        if(watchlist[i].id === movieObj.id){
            return true;
        }
        
    }  
    return false;
  };
  return (
    <>
        <div className='relative flex flex-col h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer justify-between items-end' style={{
                        backgroundImage:`url(${`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`})`}}>

  
        {
          doesContain(movieObj) ? (
            <div onClick={() => removeFromWatchlist(movieObj)} className='m-4 flex justify-center h-8 w-8 items-center rounded-1g bg-red-900/60'>
              ❌
              </div>
          ):(
            <div 
          onClick={() => addtoWatchlist(movieObj)} className='m-4 flex justify-center h-8 w-8 items-center rounded-2xl bg-gray-900/60'>
           😊
          </div>
          )
        }
        <div className='text-white w-full text-center p-2 bg-gray-900/70 rounded-lg'>
        <h2 className='text-sm font-semibold text-center truncate items-end'>{movieObj.title}</h2></div>
      </div>
    </>
  )
}

export default MovieCard