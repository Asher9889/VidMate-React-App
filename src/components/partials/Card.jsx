import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({item, title}) => {
  // console.log(items)
  
  return (
    <div  className="w-full  h-fit px-5  mt-4 flex pb-8 gap-6 flex-wrap">
            {item.map((elem, index) => (
              
              <Link to={`/${elem.media_type || title}/details/${elem.id}`} key={elem.id}  className="relative bg-zinc-900 mx-auto w-56 shadow-[5px_5px_5px_5px_rgb(0_0_0_/_50%)]">
                <img
                  className="w-56"
                  src={`https://image.tmdb.org/t/p/original/${elem.poster_path || elem.
                  profile_path}`}
                  alt=""
                />
                <h1 className="font-dark text-zinc-100 text-2xl pt-1 px-2">
                  {(elem.title || elem.name || elem.original_title)}
                </h1>
                {elem.vote_average && 
                <div className='absolute  font-dark  top-[40vh] -right-5 text-white  w-12 h-12 bg-orange-600 flex justify-center items-center rounded-full'>
                  {Math.floor(elem.vote_average*10)} <sup>%</sup>
                </div>}
              </Link>

              
              
              
            ))}
          </div>
  )
}

export default Card
