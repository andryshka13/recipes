import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMealContext } from "./../context/mealContext";
import MealList from "../components/MealList";
import { startFetchingMealByCategory } from "../actions/mealActions";

const CategoryPage = () => {
  const { name } = useParams();
  const { categoryMeals, dispatch, categories } = useMealContext();
  let categoryDescription = "";

  if (categories) {
    categories.forEach((category) => {
      if (category.strCategory === name) {
        categoryDescription = category?.strCategoryDescription;
      }
    });
  }

  useEffect(() => {
    startFetchingMealByCategory(dispatch, name);
  }, [name, dispatch]);

  return (
    <main className="py-5 bg-olive">
      <div className=" max-w-[1320px] mx-auto my-0 px-8 py-0 bg-white rounded-lg">
        <div className=" px-4 py-4">
          <h2 className="text-slate-950 text-2xl font-medium pb-2">{name}</h2>
          <p className="text-m text-slate-950">{categoryDescription}</p>
        </div>
      </div>
      {categoryMeals?.length ? <MealList meals={categoryMeals} /> : null}
    </main>
  );
};

export default CategoryPage;
