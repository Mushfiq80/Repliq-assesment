import RecipeLoader from "@/components/RecipeLoader/recipeLoader";
import React from "react";

const AllRecipes = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center">
      <div className="container mx-auto">
        <RecipeLoader />
      </div>
    </div>
  );
};

export default AllRecipes;
