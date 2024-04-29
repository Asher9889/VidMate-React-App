import React from "react";
import '../../app.css'

const DropDown = ({options, func, title}) => {
  return (
    <>
      <div className="w-56 mt-2 ">
        <select onChange={func} className="dropbtn w-full h-full px-2 rounded-md p-1 outline-none bg-zinc-700 text-zinc-100">
         <option defaultValue="0" >{title}</option>
         {options.map((elem, index)=>(
          <option key={elem}  value={elem}>{elem.toUpperCase()}</option>
         ))}
         
          
        </select>
      </div>
    </>
  );
};

export default DropDown;
