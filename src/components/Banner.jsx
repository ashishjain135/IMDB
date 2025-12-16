import React from 'react'
import {Link} from 'react-router-dom'

function Banner(){
  return (
    <>
        <div className='h-[20vh md:h[75vh]bg-cover bg-center flex items-end 'style={
            {backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW92aWV8ZW58MHx8MHx8fDA%3D&w=1000&q=80')", height: '75vh'}
        }>
          <div className='text-white w-full text-center text-2xl'>Placeholder movie</div>
        </div>
    </>
  )
}

export default Banner