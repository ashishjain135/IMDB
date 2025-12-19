import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../assets/logo.png'
const Navbar = () => {
  return (
    <>
      <div className='flex space-x-8 items-center pl-3 py-4 bg-gray-800 text-white'>
      <Link to="/">
        <img className='w-[50px] border-radius: 5rem;' src={Logo} alt="Logo" />
      </Link>
      <div className='text-blue-500 text-3xl font-bold space-x-8'>
        <Link to="/">Home</Link>
        <Link to="/watchlist">WatchList</Link>
      </div>
      </div>
    </>
  )
}

export default Navbar