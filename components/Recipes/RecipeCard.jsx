import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import React from "react";

const RecipeCard = ({ recipe, handleDetailsOpen, showAddToCart }) => {
  const addToCart = (recipeId) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const cartKey = user ? `cart_${user.email}` : "guest_cart";
    const currentCart = JSON.parse(localStorage.getItem(cartKey)) || [];
    if (!currentCart.includes(recipeId)) {
      console.log(recipeId);
      currentCart.push(recipeId);
      localStorage.setItem(cartKey, JSON.stringify(currentCart));
    }
  };

  return (
    <div className="relative group space-y-6 border border-gray-100 rounded-3xl bg-white px-4 py-4 text-center shadow hover:cursor-pointer hover:shadow-xl transition duration-200 shadow-gray-600/10">
      <Image
        className="mx-auto rounded-2xl"
        src={recipe?.strMealThumb}
        alt={recipe?.strMeal}
        loading="lazy"
        width={500}
        height={500}
      />
      
      {showAddToCart && (
        <button
          className="absolute top-6 right-8 bg-white p-2 rounded-full shadow-lg text-primary"
          onClick={(e) => {
            e.stopPropagation();
            addToCart(recipe.idMeal);
          }}
        >
          <FontAwesomeIcon icon={faCartShopping} />
        </button>
      )}
      
      <h3 className="text-2xl font-semibold text-gray-800">
        {recipe?.strMeal}
      </h3>
      
      <p>
        Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum,
        consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea
        animi officiis.
      </p>

      <div className="relative mx-auto flex items-center justify-center invisible group-hover:visible">
        <button
          className="text-primary"
          onClick={(e) => {
            e.stopPropagation();
            handleDetailsOpen(recipe.idMeal);  // Trigger modal with recipe ID
          }}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;