import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GiMeal } from "react-icons/gi";
import { CiMenuBurger } from "react-icons/ci";
import { useSidebarContext } from "../context/sidebarContext";

const Navbar = () => {
  const { openSidebar } = useSidebarContext();
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 60) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <nav
      className={`bg-olive flex justify-center  ${scrolled ? "scrolled" : ""}`}
    >
      <div className="w-[90%] text-white h-[100px] flex justify-between">
        <Link to="/" className="flex items-center text-xl font-light ml-1 ">
          <GiMeal size={40} />
          <span className="ml-2 font-light text-2xl">Eat Tasty</span>
        </Link>
        <div className="flex items-center mr-3">
          <button className="mr-3 " onClick={() => openSidebar()}>
            <CiMenuBurger size={35} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
