import Trending from "./partials/Trending";
import SideNav from "./partials/SideNav";
import TopNav from "./partials/TopNav";
import Header from "./header/Header";
import axios from "../utils/axios";
import React, { useEffect, useState } from "react";


const Home = () => {
  document.title = "VidMate Home Page";

  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState([]);
  const[category, setCategory] = useState("all") 

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
      console.log(error)
    }
  };

  useEffect(() => {
    headerWallpaper();
  }, []);

 
  const [trending, setTrending] = useState([])

  const getTrending = async ()=>{

    try {
      const d = await axios.get(`/trending/${category}/week`);
      const { results } = d.data;
      setTrending(results);
      console.log(results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=>{
    getTrending()
  },[category])


 

   

  return (
    <>
      <div className="w-full h-screen flex">
        <SideNav />

        <div className="w-[80%] h-screen">
          <TopNav query={query} setQuery={setQuery} searches={searches} />
          <Header singleWallpaper={singleWallpaper}/>
          <Trending trending={trending} setCategory={setCategory}/>
        </div>
      </div>
    </>
  );
};

export default Home;
