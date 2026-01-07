import React from 'react'
import {Link} from 'react-router-dom'
import Banner from './Banner'
import Movies from './Movies'
import Counter from './Counter'
const Home = () => {
  return (
    <>
      <Banner />
      <Movies />
      <Counter />
    </>
  )
}

export default Home