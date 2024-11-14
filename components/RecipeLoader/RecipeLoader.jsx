"use client"
import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import HttpKit from "@/common/helpers/HttpKit";
import RecipeCard from "../Recipes/RecipeCard";


const RecipeLoader = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ["allRecipes"],
        queryFn: HttpKit.getAllRecipes,
    });

    if (isLoading) return <div>
        <button type="button" class="bg-yellow-600..." disabled>
            <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
            Processing...
        </button>
    </div>;
    if (error) return <div>Error loading recipes: {error.message}</div>;

    return (
        <div className="container mx-auto py-10">
            <h1 className="text-3xl font-bold">All Recipes</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {data.map((recipe) => (
                    <RecipeCard 
                    key={recipe.id} 
                    recipe={recipe}
                    handleDetailsOpen={handleDetailsOpen} 
                    showAddToCart={true}/>
                ))}
                
            </div>
        </div>
    );
};

export default RecipeLoader;