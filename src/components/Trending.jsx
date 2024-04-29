import React from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "./partials/TopNav";
import DropDown from "./partials/DropDown";
import { useState, useEffect } from "react";
import axios from "../utils/axios";
import Loading from "./Loading";
import Card from "./partials/Card";

const Trending = () => {
  const navigate = useNavigate();

  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("week");
  const [trending, setTrending] = useState();

  const trendingAPI = async () => {
    try {
      const d = await axios.get(`/trending/${category}/${duration}`);
      const { results } = d.data;
      setTrending(results);
      console.log(results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    trendingAPI();
  }, [category, duration]);

  return (
    <>
      {trending ? (
        <div className="w-full h-screen px-5 overflow-y-auto">
          <div className="w-full sticky py-2 top-[0px] flex bg-[#1F1E24] items-center justify-center">
            <span className="text-xl h-fit text-zinc-400 font-semibold font-inter flex items-center justify-center">
              <i
                onClick={() => navigate(-1)}
                class="ri-arrow-left-line pr-2 cursor-pointer hover:text-[#6556CD]"
              ></i>
              Trending{" "}
            </span>

            <div className="flex-1 flex items-center justify-center">
              <TopNav />
            </div>

            <DropDown
              title="Category"
              options={["all", "tv","movie", "person"]}
              func={(e) => setCategory(e.target.value)}
            />
            <div className="w-4"></div>
            <DropDown
              title="Duration"
              options={["day", "week"]}
              func={(e) => setDuration(e.target.value)}
            />
          </div>

          <Card item={trending}/>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Trending;
