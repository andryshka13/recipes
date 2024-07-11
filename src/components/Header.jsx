import React from "react";
import Navbar from "./Navbar";
import Search from "./SearchForm";
const Header = () => {
  return (
    <header className="header">
      <Navbar />
      <div
        className="h-[400px]  bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.7)),url('./assets/frame.jpg')] 
      bg-no-repeat bg-cover bg-top bg-fixed flex items-center justify-center flex-col text-center"
      >
        <Search />
        <h1 className="text-white mt-[2.4rem] tracking-[2px] text-x">
          What are your favorite dish?
        </h1>
        <p
          id="meal-details-title"
          className="uppercase text-white tracking-[1px]  my-4"
        >
          personalize your experience
        </p>
      </div>
    </header>
  );
};

export default Header;
