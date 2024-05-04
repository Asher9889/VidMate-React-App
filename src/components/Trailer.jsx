import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const Trailer = () => {
  const { info } = useSelector((state) => state.movieReducer);
  const navigate = useNavigate()
  const { pathname } = useLocation();

  return (
    <div className="absolute flex justify-center items-center top-0  bg-[rgba(0,0,0,0.8)] z-30 w-full h-full ">
      <div className="relative ">
        
        <i  class="ri-close-large-line text-xl font-black text-white absolute -top-10 -right-10 ri-close-large-line cursor-pointer hover:text-[#6556CD]" onClick={() => navigate(-1)}></i>

        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${info.videos.key}`}
          controls="true"
          width="720px"
          wrapper={"div"}
        />
      </div>
    </div>
  );
};

export default Trailer;
