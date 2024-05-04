import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Trending from "../components/Trending";
import Popular from "../components/Popular";
import Movie from "../components/Movie";
import TvShow from "../components/TvShow";
import People from "../components/People";
import MovieDetails from "../components/MovieDetails";
import TvDetails from "../components/TvDetails";
import PeopleDetails from "../components/PeopleDetails";
import Trailer from "../components/Trailer";


const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movie" element={<Movie />}>

          

        </Route>
        <Route path="/tv" element={<TvShow />}/>
        <Route path="/people" element={<People />}/>

        
        <Route path="/movie/details/:id" element={<MovieDetails />} >

          <Route path="/movie/details/:id/trailer" element={<Trailer/>}/>

        </Route>
        <Route path="/tv/details/:id" element={<TvDetails />} />
        <Route path="/people/details/:id" element={<PeopleDetails />} />
        {/* <Route path="/all/details/:id" element={<AllDetails />} /> */}
       
      </Routes>
    </div>
  );
};

export default Routing;
