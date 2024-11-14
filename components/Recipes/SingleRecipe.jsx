import HttpKit from "@/common/helpers/HttpKit";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";

const SingleRecipe = ({ id, setIsOpen }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["recipe-details", id],
    queryFn: () => HttpKit.getRecipeDetails(id),
    enabled: !!id, // Only fetch if `id` exists
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading recipe details: {error.message}</div>;

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-end">
        <button onClick={() => setIsOpen(false)}>Close</button>
      </div>
      {data ? (
        <>
          <div>
            <Image src={data.strMealThumb} width={500} height={500} alt="Recipe Image" />
          </div>
          <h2 className="text-2xl font-semibold">{data.strMeal}</h2>
          <p className="text-lg">{data.strInstructions}</p>
        </>
      ) : (
        <p>No recipe details available.</p>
      )}
    </div>
  );
};

export default SingleRecipe;
