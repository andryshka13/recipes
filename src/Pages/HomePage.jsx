import React from "react";
import Loader from "../components/Loader";
import Category from "../components/Category";
import { useMealContext } from "../context/mealContext";
import SearchNotFound from "../components/SearchNotFound";
import MealList from "../components/MealList";

const HomePage = () => {
  const { categories, meals, categoryLoading, mealsLoading } = useMealContext();
  return (
    <main className="main-content">
      {mealsLoading ? (
        <Loader />
      ) : meals === null ? (
        <SearchNotFound />
      ) : meals?.length ? (
        <MealList meals={meals} />
      ) : (
        ""
      )}
      {categoryLoading ? <Loader /> : <Category categories={categories} />}
    </main>
  );
};

export default HomePage;
