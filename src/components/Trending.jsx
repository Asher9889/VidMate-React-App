import React from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "./partials/TopNav";
import DropDown from "./partials/DropDown";
import { useState, useEffect } from "react";
import axios from "../utils/axios";
import Loading from "./Loading";
import Card from "./partials/Card";
import InfiniteScroll from 'react-infinite-scroll-component';

const Trending = () => {
  const navigate = useNavigate();

  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("week");
  let [page, setPage] = useState(1);

  const [trending, setTrending] = useState([]);

  document.title = "Trending " + category.toUpperCase();

  const trendingAPI = async () => {
    try {
      setPage(page + 1)
      const d = await axios.get(`/trending/${category}/${duration}?page=${page}`);
      const { results } = d.data;
      // setTrending(results)
      setTrending((prev) => [...prev, ...results]);
      console.log(results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setTrending([])
    trendingAPI();
  }, [category, duration]);


  return (
    <>
      {trending.length > 0 ? (
        <div className="w-full h-fit  bg-[#1F1E24] ">
          <div className="w-full sticky z-10 px-5 py-2 top-[0px] flex bg-[#1F1E24] items-center justify-center">
            <span className="text-xl h-fit text-zinc-400 font-semibold font-inter flex items-center justify-center">
              <i
                onClick={() => navigate(-1)}
                class="ri-arrow-left-line pr-2 cursor-pointer hover:text-[#6556CD]"
              ></i>
              Trending <p className="ml-2 text-xs text-zinc-500">({category.split("_").join(" ").toUpperCase()})</p>
            </span>

            <div className="flex-1 flex items-center justify-center">
              <TopNav />
            </div>

            <DropDown
              title="Category"
              options={["movie","tv", "person","all"]}
              func={(e) => setCategory(e.target.value)}
            />
            <div className="w-4"></div>
            <DropDown
              title="Duration"
              options={["day", "week"]}
              func={(e) => setDuration(e.target.value)}
            />
            
          </div>

          <InfiniteScroll
            dataLength={trending.length}
            next={trendingAPI}
            hasMore={true}
            loader={<h1>Loading.....</h1>}
          >

           <Card item={trending}/>

          </InfiniteScroll>

        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Trending;
