
import React from "react";
import { Link } from "react-router-dom";
import Loading from "../Loading"

const Header = ({singleWallpaper}) => {
  

  return (
   
    <div className="w-full  relative transition-all">
       { singleWallpaper ? <>
      <img
        className="w-full h-[55vh] object-cover object-top"
        src={`https://image.tmdb.org/t/p/original/${
          singleWallpaper.backdrop_path ||
          singleWallpaper.poster_path ||
          singleWallpaper.profile_path
        }`}
        alt="image"
      />
      <div className="absolute w-[80%] top-[30%] left-[3%]">
        
          <h1 className="bg-transparent  [text-shadow:_1px_1px_1px_rgb(0_0_0_/_80%)]  font-dark text-2xl text-white font-bold">
          {singleWallpaper.title ||singleWallpaper.name || singleWallpaper.original_name}
        </h1>
        
        <p className="text-white mb-1 text-sm [text-shadow:_1px_1px_1px_rgb(0_0_0_/_50%)] font-inter ">
          {(singleWallpaper.overview).slice(1,200)}
          <Link to={`/movie/details/${singleWallpaper.id}`} className="text-blue-600 text-sm shadow-none font-semibold ">...more</Link>
        </p>
        <span className="text-white text-sm font-semibold [text-shadow:_1px_1px_1px_rgb(0_0_0_/_50%)] font-inter ">
          <i class="ri-calendar-check-line pr-2 text-yellow-300"></i>{" "}
          {singleWallpaper.release_date}
        </span>
        <span className="ml-4  text-white text-sm [text-shadow:_1px_1px_1px_rgb(0_0_0_/_50%)] font-inter ">
          <i class="ri-movie-2-line pr-2 text-yellow-300"></i>{" "}
          {singleWallpaper.vote_count}
        </span>
        <button className="block mt-3 text-white hover:bg-blue-700 bg-blue-600 px-4 py-2 rounded-md">
          View Trailer
        </button>
        
        
      </div>
      </> : null }
    </div>
  );
};

export default Header;
