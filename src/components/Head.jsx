import React from "react";
import hamburger from "/hamburger.png"; // Correct import
import youtube from "/youtube.png";
import usericon from "/usericon.png";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";

const Head = () => {
    const dispatch = useDispatch();

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">

      <div className="flex col-span-1 mx-2 gap-2">

        <img 
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer" 
          alt="menu" 
          src={hamburger} />
        
        <a href='/'>
        <img 
        className='h-8 '
        src={youtube} 
        alt="youtube logo" />
        </a>

      </div>

      <div className="col-span-10 px-10">
        <input className="w-1/2 border-gray-400 border p-2 rounded-l-full"
        type="text"
        placeholder="Search Anything" />

        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">Search</button>
      </div>

      <div className="col-span-1 ">
        <img className="h-8"
        src={usericon} alt="user-icon" />
      </div>
    </div>
  );
};

export default Head;
