import React from "react";
import { Link } from "react-router-dom";

const MealList = ({ meals }) => {
  const handleScroll = () => {
    const mealDetails = document.getElementById("meal-details-title");

    if (mealDetails) {
      mealDetails.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="px-0 py-10 bg-olive">
      <div className="max-w-[1320px] mx-auto my-0 px-8 py-0">
        <div className="text-center text-4xl text-slate-950 px-2 py-6 rounded-[3px] right-1.5 top-1.5 ">
          Meals
        </div>
        <section className="grid xl:grid-cols-[repeat(5,1fr)] lg:grid-cols-[repeat(4,1fr)] md:grid-cols-[repeat(3,1fr)] sm:grid-cols-[repeat(2,1fr)] gap-[2.4rem]">
          {meals?.map((mealItem) => {
            const {
              idMeal: id,
              strMeal: meal,
              strMealThumb: thumbnail,
            } = mealItem;

            return (
              <Link
                to={`/meal/${id}`}
                className="shadow-[rgba(0,0,0,0.15)_1.95px_1.95px_2.6px] justify-center items-center rounded-3xl 
                hover:shadow-[rgba(0,0,0,0.25)_0px_54px_55px,rgba(0,0,0,0.12)_0px_-12px_30px,rgba(0,0,0,0.12)_0px_4px_6px,rgba(0,0,0,0.17)_0px_12px_13px,rgba(0,0,0,0.09)_0px_-3px_5px]"
                key={id}
                onClick={handleScroll}
              >
                <div className="relative overflow-hidden border rounded-[24px_24px_0px_0px] border-solid border-[rgba(0,0,0,0.1)]">
                  <img src={thumbnail} alt={meal} />
                </div>

                <div className="meal-itm-body">
                  <div className="meal-itm-body-info flex-column">
                    <div className="text-center p-3 font-medium op-09 ">
                      {meal}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default MealList;
