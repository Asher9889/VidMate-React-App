import { Link } from "react-router-dom";
import Image from "../../assets/noimage.jpg"
import { useState, useEffect } from "react";
import axios from "../../utils/axios";


const TopNav = () => {

  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState([]);

  const getSearches = async () => {
    try {
      const d = await axios.get(`/search/multi?query=${query}`);
      const { results } = d.data;
      setSearches(results);
      // console.log(results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSearches();
  }, [query]);
  return (
    <>
      <div className="w-[60vw] h-[10%] mb-2 relative text-zinc-300 py-2 text-2xl gap-4 ml-[20%] flex items-center">
        <i class="ri-search-line"></i>
        <input
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          type="text"
          className="w-[50%] font-semibold bg-transparent text-base px-2 py-1 outline-none border-none"
          placeholder="Search Something"
        />
        {query != "" ? (
          <i onClick={() => setQuery("")} class="ri-close-fill"></i>
        ) : null}
        {
          <div className="absolute z-10 w-[60%] max-h-[500%] top-[100%] bg-zinc-200 overflow-auto rounded-lg ">
            {searches.map((elem, index) => (
              <Link key={elem.id} className="inline-block  w-full flex items-center  hover:text-black hover:bg-zinc-300 rounded p-4 py-4  font-semibold text-base text-zinc-700  border-b-2 border-zinc-300 ">
                <span className="">
                  <img
                    className="w-32 h-20 object-cover object-center   rounded-xl shadow-xl mr-4"
                    src={(elem.backdrop_path ||
                      elem.poster_path ||
                      elem.profile_path) ? `https://image.tmdb.org/t/p/original/${
                      elem.backdrop_path ||
                      elem.poster_path ||
                      elem.profile_path}` : Image
                    }
                    alt="no image available"
                  />
                </span>
                {(elem.original_name || elem.name || elem.title).slice(0,40)}
              </Link>
            ))}
          </div>
        }
      </div>
    </>
  );
};

export default TopNav;
