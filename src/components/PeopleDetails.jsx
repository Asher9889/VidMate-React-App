import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom";
import AsyncGetPeople from "../store/actions/AsyncGetPeople";
import { removePerson } from "../store/reducers/personSlice";
import Loading from "./Loading";
import IMDb from "../assets/imdb.png";
import WIKI2 from "../assets/social.png";
import TopNav from "./partials/TopNav.jsx";
import DropDown from "./partials/DropDown.jsx";
import HorizontalCard from "./partials/HorizontalCard.jsx";

const PeopleDetails = () => {
  const navigate = useNavigate();
  const[category, setCategory] = useState("cast");
  const { info } = useSelector((state) => state.personReducer);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(AsyncGetPeople(id));
    return () => {
      dispatch(removePerson());
    };
  }, [id, category]);

  console.log(info);

  return (
    <>
      {info ? (
        <>
          {/* Top Nav */}
          <div className="glass absolute w-full top-0 z-10 flex items-center px-3 text-white   font-inter font-semibold">
            <i
              onClick={() => navigate(-1)}
              className="ri-arrow-left-line pl-2 text-2xl cursor-pointer hover:text-[#6556CD]"
            ></i>

            <div className="flex items-center gap-10   px-10">
              <span>
                <a
                  className="toolTip hover:text-[#6556CD]"
                  onClick={() => navigate("/")}
                >
                  <i className="ri-home-4-line text-xl "></i>
                </a>
                <p className="toolText">Home</p>
              </span>

              <a
                href={`https://www.wikidata.org/wiki/${info.socialLinks.wikidata_id}`}
                className=" hover:text-[#6556CD] flex justify-center items-center bg-white relative rounded-full "
                target="_blank"
              >
                <img className="w-7 z-10 border-0" src={WIKI2} alt="" />
              </a>
            </div>

            <TopNav color="" />
          </div>
          {/* People Details */}
          <div className="w-full h-[200vh] bg-[#1F1E24] flex pt-[21vh] gap-5 px-10">
            <div className="left w-52 flex flex-col gap-8">
              <img
                className="h-72"
                src={`https://image.tmdb.org/t/p/original/${info.details.profile_path}`}
                alt="profile-photo"
              />

              <hr className="border-[1.5px] border-zinc-500" />

              <nav className="flex items-center gap-4 mx-auto ">
                <Link
                  target="_blank"
                  to={`https://www.facebook.com/${info.socialLinks.facebook_id}`}
                >
                  <i className="ri-facebook-fill text-3xl text-white"></i>
                </Link>
                <Link
                  target="_blank"
                  className="flex hover:text-yellow-500"
                  to={`https://www.imdb.com/title/${info.details.imdb_id}`}
                >
                  <img className="w-8 h-8 mr-1" src={IMDb} alt="" />
                </Link>{" "}
                <a
                  target="_blank"
                  href={`https://www.instagram.com/${info.socialLinks.instagram_id}}`}
                >
                  {" "}
                  <i className="ri-instagram-line text-3xl text-white "></i>
                </a>
                <Link
                  target="_blank"
                  to={`https://www.imdb.com/title/${info.socialLinks.imdb_id}`}
                >
                  {" "}
                  <i className="ri-twitter-x-fill text-3xl text-white "></i>
                </Link>
              </nav>
              <div>
                <ul className="text-2xl  text-zinc-300 font-bold text-inter">
                  {" "}
                  Personal Info
                  <li className="text-xl mt-4 text-zinc-400 font-semibold text-inter">
                    Known for <br />{" "}
                    <p className="text-zinc-200">
                      {info.details.known_for_department}
                    </p>
                  </li>
                  <li className="text-xl mt-4 text-zinc-400 font-semibold text-inter">
                    Gender <br />{" "}
                    <p className="text-zinc-200">
                      {info.details.gender == 2 ? "Male" : "Female"}
                    </p>
                  </li>
                  <li className="text-xl mt-4 text-zinc-400 font-semibold text-inter">
                    BirthDay <br />{" "}
                    <p className="text-zinc-200">{info.details.birthday}</p>
                  </li>
                  <li className="text-xl mt-4 text-zinc-400 font-semibold text-inter">
                    DeathDate <br />{" "}
                    <p className="text-zinc-200">
                      {info.details.deathday == null ? "Still Alive" : deathday}
                    </p>
                  </li>
                  <li className="text-xl mt-4 text-zinc-400 font-semibold text-inter">
                    Place of Birth <br />{" "}
                    <p className="text-zinc-200">
                      {info.details.place_of_birth}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="right flex-1 flex flex-col gap-3 overflow-x-auto  text-white "
              style={{ textShadow: "2px 1px 5px black" }}
            >
              <h1 className="text-4xl  font-dark text-zinc-100  ">
                {info.details.name}
              </h1>

              {info.details.biography && (
                <span className="max-h-[40vh] overflow-y-auto">
                  <p className="text-xl font-semibold mb-1">Biography</p>
                  <h3 className="text-base font-inter text-white">
                    {info.details.biography}
                  </h3>
                </span>
              )}
              
             <div className="mt-6 flex flex-col ">
                <div className="flex justify-between">
                  <h1 className="text-2xl mb-4  text-zinc-300 font-bold text-inter">Known For</h1>
                  <DropDown title="category" options={["cast", "crew"]} func={(e) => setCategory(e.target.value)}/>
                </div>
                {info.combineCredit[category] && <HorizontalCard trending={info.combineCredit[category]}/>} 
              </div>
              
            </div>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default PeopleDetails;
