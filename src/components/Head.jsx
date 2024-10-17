import React from "react";
import hamburger from "/hamburger.png"; // Correct import
import youtube from "/youtube.png";
import usericon from "/usericon.png";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { useState,useEffect } from "react";

const Head = () => {
  //Debouncing
   const[searchQuery,setSearchQuery] = useState("");
   const [suggestions,setSuggestions] = useState([]);
   const [showSuggestions, setShowSuggestions] = useState(false);

   useEffect(() => {
    

    //Make an api call after every key press but if the difference between 2 api calls is < 200ms decline the api call
   const timer = setTimeout(()=> getSearchSuggestions(),200);

   return () => {
    clearTimeout(timer);
   };
   }, [searchQuery])

  /**
   * key - i
   * - render the component
   * - useEffect();
   * - start timer => make api call after 200ms
   * 
   * key - ip (if p is pressed before 200 ms are over)
   * - destroy the component(useEffect return method)
   * - re-render the component
   * - useEffect()
   * - start timer => make api call after 200ms
   * - setTimeout(200) - make an API call
   */

   const getSearchSuggestions = async () => {
    console.log(searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);
   }
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

        <div>
        <input className="px-5 w-1/2 border-gray-400 border p-2 rounded-l-full"
        type="text"
        placeholder="Search Anything" 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setShowSuggestions(false)}
        />
        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">Search</button>
      </div>
    {showSuggestions && (<div className="absolute bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100">
      <ul>
          {suggestions.map((s) => ( <li key={s}className="py-2 px-3 shadow-sm hover:bg-gray-100">{s}</li>
        ))}
        
      </ul>
    </div>)}
      </div>

      <div className="col-span-1 ">
        <img className="h-8"
        src={usericon} alt="user-icon" />
      </div>
    </div>
  );
};

export default Head;
