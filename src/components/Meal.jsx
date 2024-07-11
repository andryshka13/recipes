import React from "react";
import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { BiChevronsRight } from "react-icons/bi";
import { FaSpoon } from "react-icons/fa6";
const Meal = ({ meal }) => {
  let tags = meal?.tags?.split(",");
  let instructions = meal?.instructions?.split("\r\n");

  return (
    <div className=" px-0 py-20 bg-white">
      <div className="max-w-[1120px] mx-auto my-0 px-8 py-0">
        <div className="shadow-[rgba(0,0,0,0.24)_0px_3px_8px] mb-[3.2rem] px-8 py-4 bg-olive text-slate-950 text-base">
          <ul className="flex items-center my-2">
            <li>
              <Link to="/" className="flex items-center">
                <IoMdHome size={22} />
              </Link>
            </li>
            <li className="flex items-center mx-1">
              <BiChevronsRight size={23} />
            </li>
            <li className="flex">
              <span to="" className="text-[15px] font-medium">
                {meal?.title}
              </span>
            </li>
          </ul>
        </div>
        <div className=" uppercase font-[bold] tracking-[4px] relative text-2xl mb-[4.8rem] px-0 py-1">
          Meal Details
        </div>
        <section
          className="p-4 bg-olive
        shadow-[rgba(0,0,0,0.24)_0px_3px_8px] "
        >
          <div className="grid items-center grid-cols-1 lg:grid-cols-2">
            <div className="h-full flex justify-center">
              <img
                src={meal?.thumbnail}
                alt="meal-image"
                className="rounded-3xl xs:max-lg:size-[400px] "
              />
            </div>
            <div className=" mt-4 px-8 ">
              <h3 className="text-2xl border-b-slate-900 px-0 py-3 border-b border-solid">
                {meal?.title}
              </h3>
              <div className="py-6">
                <div className="md:flex items-center ">
                  <span className="font-extrabold my-1 tracking-[2px]">
                    Category: &nbsp;
                  </span>
                  <span className="tracking-[2px]">{meal?.category}</span>
                </div>
                <div className="flex items-center">
                  <span className="font-bold">Source: &nbsp;</span>
                  <a
                    href={meal.source}
                    className="w-20 text-ellipsis overflow-hidden md:w-auto"
                  >
                    {meal.source
                      ? (meal?.source).substring(0, 40) + "..."
                      : "Not found"}
                  </a>
                </div>
              </div>
              <div className="flex items-center flex-wrap">
                <h6 className="mr-3 text-base">Tags:</h6>
                <ul className="flex items-center flex-wrap">
                  {tags?.map((tag, index) => (
                    <li
                      key={index}
                      className="text-[14px] border border-[olive] text-slate mr-1.5 px-2 py-0 rounded-[3px] border-solid"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className=" my-3 px-4 py-4 bg-white text-slate-950 rounded-2xl">
            <h6 className="text-xl  m-2">Ingredients:</h6>
            <ul className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3">
              {meal?.ingredients?.map((ingredients, index) => (
                <li key={index} className="flex items-center ">
                  <span
                    className="shadow-[rgba(0,0,0,0.09)_0px_1px_1px] 
                      text-slate-950 w-5 h-5 inline-flex items-center justify-center text-xs mr-2 rounded-[50%] border-[1px] border-solid border-slate"
                  >
                    {index + 1}
                  </span>
                  <span className="text-base">{ingredients}</span>
                </li>
              ))}
            </ul>

            <h6 className="text-xl m-2">Measure:</h6>
            <ul className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3">
              {meal?.measures?.map((measure, index) => (
                <li className="text-base flex items-end mb-2" key={index}>
                  <span className="mr-2">
                    <FaSpoon />
                  </span>
                  <span className="text-sm">{measure}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="m-8">
            <h6 className="text-xl">Instructions: </h6>
            <ul className="grid ">
              {instructions?.map((instruction, index) => (
                <li key={index} className="text-base">
                  <span>{instruction}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Meal;
