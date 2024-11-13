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

    if (isLoading) return <div>Loading all recipes...</div>;
    if (error) return <div>Error loading recipes: {error.message}</div>;

    return (
        <div className="container mx-auto py-10">
            <h1 className="text-3xl font-bold">All Recipes</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {data.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </div>
    );
};

export default RecipeLoader;