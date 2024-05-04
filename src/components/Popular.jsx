import React from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "./partials/TopNav";
import DropDown from "./partials/DropDown";
import { useState, useEffect } from "react";
import axios from "../utils/axios";
import Loading from "./Loading";
import Card from "./partials/Card";
import InfiniteScroll from 'react-infinite-scroll-component';

const Popular = () => {
  const navigate = useNavigate();
  
  const [category, setCategory] = useState("movie");
  const [popular, setPopular] = useState([]);
  let [page, setPage] = useState(1);
  
  document.title = "Popular " + category.toUpperCase();
  const popularAPI = async () => {
    try {
      setPage(page + 1)
      const d = await axios.get(`/${category}/popular?page=${page}`);
      const { results } = d.data;
      // setPopular(results)
      setPopular((prev) => [...prev, ...results]);
      console.log(results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setPopular([])
    popularAPI();
  }, [category]);

 

  return (
    <>
      {popular.length > 0 ? (
        <div className="w-full h-fit  py-2 bg-[#1F1E24]">
          <div className="w-full sticky z-10  px-4 py-2 top-[0px] flex bg-[#1F1E24] items-center justify-center">
            <span className="text-xl h-fit text-zinc-400 font-semibold font-inter flex items-center justify-center">
              <i
                onClick={() => navigate(-1)}
                class="ri-arrow-left-line pr-2 cursor-pointer hover:text-[#6556CD]"
              ></i>
              Popular <p className="ml-2 text-xs text-zinc-500">({category.split("_").join(" ").toUpperCase()})</p>
            </span>

            <div className="flex-1 flex items-center justify-center">
              <TopNav />
            </div>

            <DropDown
              title="Category"
              options={["tv","movie", "person"]}
              func={(e) => setCategory(e.target.value)}
            />
            
          </div>

          <InfiniteScroll
            dataLength={popular.length}
            next={popularAPI}
            hasMore={true}
            loader={<h1>Loading.....</h1>}
          >

           <Card item={popular} title={category}/>

          </InfiniteScroll>

        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Popular;
