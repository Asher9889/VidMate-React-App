import React from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "./partials/TopNav";
import DropDown from "./partials/DropDown";
import { useState, useEffect } from "react";
import axios from "../utils/axios";
import Loading from "./Loading";
import Card from "./partials/Card";
import InfiniteScroll from 'react-infinite-scroll-component';

const People = () => {
  const navigate = useNavigate();
  
  const [people, setPeople] = useState([]);
  let [page, setPage] = useState(1);
  
  document.title = "Movie "
  const peopleAPI = async () => {
    try {
      setPage(page + 1)
      const d = await axios.get(`/person/popular?page=${page}`);
      const { results } = d.data;
      // setPopular(results)
      setPeople((prev) => [...prev, ...results]);
      console.log(results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    peopleAPI();
  }, []);
  

  return (
    <>
      {people.length > 0 ? (
        <div className="w-full h-fit  bg-[#1F1E24] ">
          <div className="w-full sticky z-10 px-4 py-2 top-[0px] flex bg-[#1F1E24] items-center justify-center">
            <span className="text-xl h-fit text-zinc-400 font-semibold font-inter flex items-center justify-center">
              <i
                onClick={() => navigate(-1)}
                class="ri-arrow-left-line pr-2 cursor-pointer hover:text-[#6556CD]"
              ></i>
              Popular Actors 
            </span>

            <div className="flex-1 flex items-center justify-center">
              <TopNav />
            </div>

            
            
          </div>

          <InfiniteScroll
            dataLength={people.length}
            next={peopleAPI}
            hasMore={true}
            loader={<h1>Loading.....</h1>}
          >

           <Card item={people} title="person"/>

          </InfiniteScroll>

        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default People;
