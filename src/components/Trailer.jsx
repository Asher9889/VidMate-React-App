import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";

const Trailer = () => {
  const { info } = useSelector((state) => state.movieReducer);

  const { pathname } = useLocation();

  return (
    <div className="absolute flex justify-center items-center top-0 bg-[rgba(0,0,0,0.8)] z-30 w-full h-full ">
      <i
        onClick={() => navigate(-1)}
        class=" absolute top-0 right-0 ri-arrow-left-line pl-2 text-2xl cursor-pointer hover:text-[#6556CD]"
      ></i>

      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${info.videos.key}`}
        controls="true"
        width="720px"
        wrapper={"div"}
      />
    </div>
  );
};

export default Trailer;
