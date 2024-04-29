import React from "react";
import DropDown from "./DropDown";
import axios from "axios";

const Trending = ({ trending, setCategory }) => {
  return (
    <>
      <div className="flex items-center justify-between pr-10">
        <p className="text-xl p-2 pl-6  h-10 font-inter font-semibold text-zinc-400">
          Trending
        </p>
        <DropDown
          title={"Filter"}
          options={["all", "movie", "tv"]}
          func={(e)=>setCategory(e.target.value)}
        />
      </div>

      <div className="w-full h-[36.5vh] rounded-md p-2 overflow-x-scroll overflow-y-hidden  ">
        <div className="w-fit h-[35vh] rounded-md    p-1 flex flex-row gap-3 overflow-x-scroll  ">
          {trending.map((elem, index) => (
            <div
              key={elem.id}
              className="w-40 rounded-md h-full bg-zinc-900 shrink-0 "
            >
              <div className="w-full h-[50%]">
                <img
                  className="w-full h-full object-cover rounded-t-md"
                  src={`https://image.tmdb.org/t/p/original/${elem.backdrop_path}`}
                  alt=""
                />
              </div>
              <div className="text-sm p-1 font-inter text-zinc-100 font-semibold">
                <p className="mb-1">
                  {(elem.original_title || elem.title || elem.name).slice(
                    0,
                    18
                  )}
                </p>

                <p className="text-xs font-medium ">
                  {elem.overview.slice(0, 60)}{" "}
                  <span className="text-blue-600">... more</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Trending;
