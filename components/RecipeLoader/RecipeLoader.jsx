"use client";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import HttpKit from "@/common/helpers/HttpKit";
import RecipeCard from "../Recipes/RecipeCard";
import Modal from "../Modal";

const RecipeLoader = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ["allRecipes"],
        queryFn: HttpKit.getAllRecipes,
    });
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedRecipeId, setSelectedRecipeId] = useState(null);

    const handleDetailsOpen = (id) => {
        setSelectedRecipeId(id);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading recipes: {error.message}</div>;

    return (
        <div className="container mx-auto py-10 text-center space-y-5">
            <h1 className="text-5xl text-orange-700 font-bold">All Recipes</h1>
            <p className="text-xl text-slate-600">
                Your journey to great meals begins here. Select, cook, and enjoy endless possibilities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {data.map((recipe) => (
                    <RecipeCard
                        key={recipe.idMeal}
                        recipe={recipe}
                        handleDetailsOpen={handleDetailsOpen}  // Pass the function here
                        showAddToCart={true} 
                    />
                ))}
            </div>

            {/* Render the Modal and pass props */}
            {isModalOpen && (
                <Modal isOpen={isModalOpen} setIsOpen={handleCloseModal}>
                    {/* Pass selectedRecipeId to fetch and display recipe details */}
                    {/* For example: <SingleRecipe recipeId={selectedRecipeId} /> */}
                </Modal>
            )}
        </div>
    );
};

export default RecipeLoader;
