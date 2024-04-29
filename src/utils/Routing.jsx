import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Home from '../components/Home';
import Trending from '../components/Trending';
import Loading from '../components/Loading';

const Routing = () => {
  return (
    <div>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/trending' element={<Trending/>} />
        <Route path='/load' element={<Loading/>} />
      </Routes>
    </div>
  )
}

export default Routing;
