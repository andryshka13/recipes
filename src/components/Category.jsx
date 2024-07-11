import React from "react";
import { Link } from "react-router-dom";

const Category = ({ categories }) => {
  const handleScroll = () => {
    const mealDetails = document.getElementById("meal-details-title");

    if (mealDetails) {
      mealDetails.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="bg-white px-0 py-10">
      <div className="max-w-[1320px] mx-auto my-0 px-8 py-0">
        <div className="text-center text-4xl text-slate-950 px-2 py-6 rounded-[3px] right-1.5 top-1.5">
          Categories
        </div>
        <section className="grid xl:grid-cols-[repeat(5,1fr)] lg:grid-cols-[repeat(4,1fr)] md:grid-cols-[repeat(3,1fr)]  sm:grid-cols-[repeat(2,1fr)]">
          {categories.map((category) => {
            const {
              idCategory: id,
              strCategory: title,
              strCategoryThumb: thumbnail,
            } = category;
            return (
              <Link
                to={`/meal/category/${title}`}
                className="items-center justify-center bg-white relative shadow-[rgba(0,0,0,0.15)_1.95px_1.95px_2.6px] mx-auto my-3 rounded-3xl 
                hover:shadow-[rgba(0,0,0,0.25)_0px_54px_55px,rgba(0,0,0,0.12)_0px_-12px_30px,rgba(0,0,0,0.12)_0px_4px_6px,rgba(0,0,0,0.17)_0px_12px_13px,rgba(0,0,0,0.09)_0px_-3px_5px]"
                key={id}
                onClick={handleScroll}
              >
                <div className="h-50 w-60 flex items-center justify-center relative rounded-3xl">
                  <img
                    id={id}
                    src={thumbnail}
                    alt={title}
                    className=" rounded-3xl hover:"
                  />
                </div>
                <div className="">
                  <h3 className="text-center uppercase text-slate-950 font-medium p-5">
                    {title}
                  </h3>
                </div>
              </Link>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default Category;
