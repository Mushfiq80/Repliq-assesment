import RecipeLoader from "@/components/RecipeLoader/recipeLoader";
import React from "react";

const AllRecipes = () => {
  return (
    <div className="bg-gray-50 flex items-center">
      <div className="container mt-10 mx-auto">
        <RecipeLoader />
      </div>
    </div>
  );
};

export default AllRecipes;
