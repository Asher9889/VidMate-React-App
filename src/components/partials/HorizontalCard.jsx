import React from "react";
import DropDown from "./DropDown";
import axios from "axios";

const HorizontalCard = ({ trending, setCategory }) => {
  return (
    <>
      

      <div className="w-full h-[45vh] rounded-md p-2 mb-6 overflow-y-hidden ">
        <div className="w-fit h-[40vh] rounded-md overflow-x-scroll    p-1 flex flex-row gap-3  ">
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

export default HorizontalCard;
