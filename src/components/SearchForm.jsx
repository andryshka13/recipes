import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router";
import { useMealContext } from "../context/mealContext";
import { startFetchMealBySearch } from "../actions/mealActions";

const SearchForm = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");
  const { dispatch, meals } = useMealContext();

  const handleSearchTerm = (e) => {
    e.preventDefault();
    if (e.target.value.replace(/[^\w\s]/gi, "").length !== 0) {
      setSearchTerm(e.target.value);
      setError("");
    } else {
      setError("Try something else... ");
    }
  };

  const handleSearchResult = (e) => {
    e.preventDefault();
    navigate("/");
    startFetchMealBySearch(dispatch, searchTerm);
  };

  return (
    <form
      className="flex items-center "
      onSubmit={(e) => handleSearchResult(e)}
      onChange={(e) => handleSearchTerm(e)}
    >
      <div className="relative inline-block">
        <input
          type="text"
          className="bg-white placeholder-slate-950 text-base h-[55px] mr-[1.2rem] px-[3.2rem] py-0 rounded-[2.8rem] pr-5 md:min-w-[400px]"
          placeholder="Search your recipe"
        />
        <button
          type="submit"
          className="bg-white w-[55px] h-[50px] absolute -translate-y-2/4 cursor-pointer right-[29px] top-2/4 transition-[$transition] rounded-[50%] text-sm"
        >
          <BsSearch className=" inline" size={20} />
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
