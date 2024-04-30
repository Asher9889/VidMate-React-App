import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Home from '../components/Home';
import Trending from '../components/Trending';
import Popular from '../components/Popular';


const Routing = () => {
  return (
    <div>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/trending' element={<Trending/>} />
        <Route path='/popular' element={<Popular/>} />
      </Routes>
    </div>
  )
}

export default Routing;
