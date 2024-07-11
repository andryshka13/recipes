import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMealContext } from "../context/mealContext";
import { startFetchingSingleMeal } from "../actions/mealActions";
import Loader from "../components/Loader";
import Meal from "../components/Meal";
import Category from "../components/Category";

const MealDetailsPage = () => {
  const { id } = useParams();
  const { categories, dispatch, meal, categoryLoading, mealLoading } =
    useMealContext();
  useEffect(() => {
    startFetchingSingleMeal(dispatch, id);
  }, [id]);

  let ingredientsArr = [],
    measuresArr = [],
    singleMeal = {};

  if (meal && meal?.length > 0) {
    for (let props in meal[0]) {
      if (props.includes("strIngredient")) {
        if (meal[0][props]) {
          ingredientsArr.push(meal[0][props]);
        }
      }
      if (props.includes("strMeasure")) {
        if (meal[0][props]) {
          if (meal[0][props].length > 1) {
            measuresArr.push(meal[0][props]);
          }
        }
      }
    }

    singleMeal = {
      id: meal[0]?.idMeal,
      title: meal[0]?.strMeal,
      category: meal[0]?.strCategory,
      area: meal[0]?.strArea,
      thumbnail: meal[0]?.strMealThumb,
      instructions: meal[0]?.strInstructions,
      source: meal[0]?.strSource,
      tags: meal[0]?.strTags,
      ingredients: ingredientsArr,
      measures: measuresArr,
    };
  }

  return (
    <main className="bg-olive ">
      {mealLoading ? <Loader /> : <Meal meal={singleMeal} />}
      {categoryLoading ? <Loader /> : <Category categories={categories} />}
    </main>
  );
};

export default MealDetailsPage;
