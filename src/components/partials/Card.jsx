import React from 'react'

const Card = ({item}) => {
  return (
    <div className=" w-full h-fit mt-4 flex pb-8 gap-6 flex-wrap  overflow-y-auto">
            {item.map((elem, index) => (
              <div className="bg-zinc-900 mx-auto w-56 shadow-[5px_5px_5px_5px_rgb(0_0_0_/_50%)]">
                <img
                  className="w-56"
                  src={`https://image.tmdb.org/t/p/original/${elem.poster_path || elem.
                  profile_path}`}
                  alt=""
                />
                <h1 className="font-dark text-zinc-100 text-2xl pt-1 px-2">
                  {(elem.title || elem.name || elem.original_title)}
                </h1>
              </div>
            ))}
          </div>
  )
}

export default Card
