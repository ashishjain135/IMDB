import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import WatchList from './components/WatchList'
import Home from './components/Home'
import {Routes, Route} from 'react-router-dom'
import  WatchlistContextWrapper from './context/WatchListContext'
import { Provider } from 'react-redux'
import store from './redux/store'
import User from './components/User'
import UserRedux from './components/UserRedux'


function App() {
  return (
    <>
      <Provider store={store}>
         {/* <User/> */}
        {/* <UserRedux/> */}
        <Navbar />
        <WatchlistContextWrapper>
        <Routes>
    
          <Route path='/' element={<Home />} />
          <Route path='/watchlist' element={<WatchList />} />
        
        </Routes>
        </WatchlistContextWrapper>
      </Provider>
    </>
  )
}

export default App
