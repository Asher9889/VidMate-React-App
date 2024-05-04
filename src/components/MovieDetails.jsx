import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AsyncGetMovie from "../store/actions/AsyncGetMovies.js";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { getMovie, removeMovie } from "../store/reducers/movieSlice.js";
import Loading from "./Loading.jsx";
import TopNav from "./partials/TopNav.jsx";
import IMDb from "../assets/imdb.png";
import HorizontalCard from "./partials/HorizontalCard.jsx";
import WIKI2 from "../assets/social.png"

const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(AsyncGetMovie(id));
    return () => {
      dispatch(removeMovie());
    };
  }, [id]);

  const { info } = useSelector((state) => state.movieReducer);

  console.log(info);

  return (
    <>
      {info ? (
        <>
          {/* for top nav */}

          <div className="glass absolute w-full top-0 z-10 flex items-center px-3 text-white   font-inter font-semibold">
            <i
              onClick={() => navigate(-1)}
              class="ri-arrow-left-line pl-2 text-2xl cursor-pointer hover:text-[#6556CD]"
            ></i>

            <div className="flex items-center gap-10   px-10">
              
              <span>
                <a className="toolTip hover:text-[#6556CD]" onClick={() => navigate("/")}>
                  <i class="ri-home-4-line text-xl "></i>
                </a>
                <p className="toolText">Home</p>

              </span>

              <a
                
                target="_blank"
                className=" hover:text-[#6556CD]"
                href={`${info.details.homepage}`}
              >
                <i class="ri-information-line text-xl"></i>
              </a>

              <Link
                target="_blank"
                className="flex hover:text-yellow-500 "
                to={`https://www.imdb.com/title/${info.details.imdb_id}`}
              >
                <img className="w-5 h-5 mr-1" src={IMDb} alt="" />
               
              </Link>

              <a href={`https://www.wikidata.org/wiki/${info.socialLinks.wikidata_id}`} className=" hover:text-[#6556CD] flex justify-center items-center bg-white relative rounded-full " target="_blank">
                <img className="w-7 z-10 border-0" src={WIKI2} alt="" />
              </a>

            </div>

            <TopNav color="" />
          </div>

          {/* for image and content */}

          <div
            className="relative w-full pt-[15%] h-fit pb-8 pt-[5%] pl-[8%] pr-10"
            style={{
              background: `linear-gradient(90deg, rgba(11,13,13,1) 0%, rgba(8,10,10,0.3925945378151261) 53%, rgba(17,18,18,0.7035189075630253) 100%),url(https://image.tmdb.org/t/p/original/${info.details.backdrop_path})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* for Portrait and info  */}
            <div className="flex gap-6 text-white">
              <div className="w-56">
                <img
                  className="w-56"
                  src={`https://image.tmdb.org/t/p/original/${info.details.poster_path}`}
                  alt=""
                />
              </div>

              <div
                className="flex flex-1  flex-col gap-2 pr-10 "
                style={{ textShadow: "2px 1px 5px black" }}
              >
                <h1
                  className="text-4xl  font-dark "
                  style={{
                    textShadow: "2px 2px 5px black",
                    letterSpacing: "1px",
                  }}
                >
                  {info.details.original_title || info.details.title}
                </h1>

                <span>
                  <p className="text-lg font-semibold mb-1">Overview</p>
                  <h3 className="text-base font-inter">
                    {info.details.overview}
                  </h3>
                </span>

                <div className="flex items-center gap-6 font-semibold text-inter tracking-[0.5px] ">
                 
                  <Link to={`/movie/details/${id}/trailer`} className="block transition-colors font-bold text-lg flex items-center gap-2 text-white hover:bg-zinc-100 hover:text-black bg-transperant border-2 border-white px-4 py-2 rounded-md">
                    View Trailer <i class="ri-play-large-line text-2xl"></i>
                  </Link>
                 
                  <span className="flex items-center gap-2">
                    <img className="w-8" src={IMDb} alt="" />
                    <p className="font-bold text-lg">
                      {info.details.vote_average.toFixed(1)}
                    </p>
                  </span>
                 
                  <hr className="w-5 bg-red-500 rotate-90 text-zinc-500" />
                 
                  <p>
                    {Math.floor(`${info.details.runtime / 60}`)}h{" "}
                    {Math.floor(`${info.details.runtime % 60}`)}min
                  </p>

                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {info.details.genres.map((e) => (
                        <div key={e.name} className=" flex items-center">
                          <hr className="w-5 rotate-90 text-zinc-500" />
                          {e.name}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-row gap-4 shrink-0">
                  <p className="text-lg font-semibold">Languages&#160;:</p>
                  <div className="">
                    <p className="text-sm text-zinc-300 font-satoshi ">
                      {info &&
                        info.language &&
                        info.language.map((elem) => `${elem.name} ,`)}
                    </p>
                  </div>
                </div>

                <div className=" flex gap-4 mt-5 flex items-center">
                  <p className="text-lg font-semibold"> Avaiavle on :</p>
                  <div className="flex gap-4 ">
                    {info.watchProvider ? (
                      info.watchProvider.rent.map((e) => (
                        <img
                          className="w-8 bg-transparent  flex  object-cover objec "
                          src={`https://image.tmdb.org/t/p/original${e.logo_path}`}
                          alt=""
                        />
                      ))
                    ) : (
                      <p>N/A</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <p className="text-white font-inter font-black text-2xl">Recommendation & Similar</p>
              <hr className="pb-6" />

              <div className="">
                <HorizontalCard
                  trending={
                    info.recommendations.results || info.similar.results
                  }
                />
              </div>
            </div>
          </div>
          
          <Outlet/>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default MovieDetails;
