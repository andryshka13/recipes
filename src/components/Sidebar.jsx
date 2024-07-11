import React from "react";
import { useSidebarContext } from "../context/sidebarContext";
import { ImCancelCircle } from "react-icons/im";
import { Link } from "react-router-dom";
import { useMealContext } from "../context/mealContext";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useSidebarContext();
  const { categories } = useMealContext();
  return (
    <nav
      className={`${
        isSidebarOpen
          ? "bg-white fixed w-1/3 h-full z-[1000] shadow-[rgba(149,157,165,0.2)_0px_8px_24px] translate-x-0 transition-all duration-300 ease-[ease-in-out] p-6 right-0 top-0"
          : "hidden"
      }`}
    >
      <button
        type="button"
        onClick={() => closeSidebar()}
        className="absolute text-slate-950 transition-all duration-300 ease-[ease-in-out] right-3.5
        hover:text-[#2D351A]"
      >
        <ImCancelCircle size={24} />
      </button>
      <div className="px-0 py-1.5">
        <ul className="mt-10">
          {categories.map((category) => (
            <li
              className="px-0 py-1.5  border-b-[0.5px] border-b-[rgba(0,0,0,0.06)] border-solid text-lg hover:bg-olive"
              key={category.idCategory}
            >
              <Link
                to={`/meal/category/${category.strCategory}`}
                className="opacity-90 transition-all duration-300 ease-[ease-in-out] hover:text-white ls-1 fs-13"
                onClick={() => closeSidebar()}
              >
                {category.strCategory}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
