import HorizontalCard from "./partials/HorizontalCard";
import SideNav from "./partials/SideNav";
import TopNav from "./partials/TopNav";
import Header from "./partials/Header";
import axios from "../utils/axios";
import React, { useEffect, useState } from "react";
import DropDown from "./partials/DropDown";
import Loading from "./Loading"

const Home = () => {
  document.title = "Home Page";

  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState([]);
  const [category, setCategory] = useState("all");

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

  const [singleWallpaper, setSingleWallpaper] = useState();

  const headerWallpaper = async () => {
    try {
      const d = await axios.get("/movie/upcoming");
      const { results } = d.data;
      const singleData = results[Math.floor(Math.random() * results.length)];
      // console.log(singleData);
      setSingleWallpaper(singleData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    headerWallpaper();
  }, []);

  const [trending, setTrending] = useState([]);

  const getTrending = async () => {
    try {
      const d = await axios.get(`/trending/${category}/week`);
      const { results } = d.data;
      setTrending(results);
      console.log(results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTrending();
  }, [category]);

  return (
    <>{singleWallpaper && trending ? (
      <div className="w-full bg-[#1F1E24] h-fit flex">
        <SideNav />

        <div className="w-[80%] h-fit">
          <TopNav query={query} setQuery={setQuery} searches={searches} />
          <Header singleWallpaper={singleWallpaper} />
          <div className="flex my-2 items-center justify-between pr-10">
            <p className="text-xl p-2 pl-6  h-10 font-inter font-semibold text-zinc-400">
              Trending
            </p>
            <DropDown
              title={"Filter"}
              options={["all", "movie", "tv"]}
              func={(e) => setCategory(e.target.value)}
            />
          </div>

          <HorizontalCard trending={trending} setCategory={setCategory} />
        </div>
      </div>
    ) : <Loading/>}
      
    </>
  );
};

export default Home;
