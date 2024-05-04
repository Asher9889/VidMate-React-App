import React from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="w-[20%] sticky top-0 right-0 h-screen border-r-2 border-zinc-500 px-5 py-5 ">
      <div className="text-2xl">
        <i className="ri-tv-fill text-[#6556CD]"></i>
        <Link to="/" className="text-xl ml-2 text-white font-bold">VidMate</Link>
      </div>

      <div className="mt-5">
        <nav className="text-md flex flex-col gap-2 ">
          <h1 className=" text-white font-semibold mb-2">New Feeds</h1>

          <Link to="/trending" className="py-2 px-3 rounded-lg hover:bg-[#6556CD] hover:text-white duration-200 text-zinc-400"> <i className="ri-fire-fill"></i> Trending</Link>
          <Link to="/popular" className="py-2 px-3 rounded-lg hover:bg-[#6556CD] hover:text-white duration-200 text-zinc-400"> <i className="ri-bard-fill"></i> Popular</Link>
          <Link to="/movie" className="py-2 px-3 rounded-lg hover:bg-[#6556CD] hover:text-white duration-200 text-zinc-400"> <i className="ri-film-fill"></i> Movies</Link>
          <Link to="/tv" className="py-2 px-3 rounded-lg hover:bg-[#6556CD] hover:text-white duration-200 text-zinc-400"> <i className="ri-slideshow-fill"></i> Tv Shows</Link>
          <Link to="/people" className="py-2 px-3 rounded-lg hover:bg-[#6556CD] hover:text-white duration-200 text-zinc-400"> <i className="ri-team-fill"></i> People</Link>
        </nav>
      </div>

      <hr className="my-5" />

      <div>
        <nav className="text-md flex flex-col gap-2 ">
          <h1 className=" text-white font-semibold mb-2">New Feeds</h1>

          <Link className="py-2 px-3 rounded-lg hover:bg-[#6556CD] hover:text-white duration-200 text-zinc-400"> <i className="ri-information-2-fill"></i> About VidMate</Link>
          <Link className="py-2 px-3 rounded-lg hover:bg-[#6556CD] hover:text-white duration-200 text-zinc-400"> <i className="ri-contacts-book-2-fill"></i> Contact Us</Link>
        </nav>
      </div>

    </div>
  );
};

export default SideNav;
