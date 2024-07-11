import React from "react";
import loader from "./../assets/loader.svg";

const Loader = () => {
  return (
    <div>
      <div className="flex justify-center items-center max-w-[1320px] mx-auto my-0 px-8 py-0">
        <img className="w-[130px]" src={loader} alt="loader" />
      </div>
    </div>
  );
};

export default Loader;
