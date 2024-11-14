"use client";
import HttpKit from '@/common/helpers/HttpKit';
import RecipeCard from '@/components/Recipes/RecipeCard';
import { useState, useEffect } from 'react';

const Cart = () => {
  const [cartRecipes, setCartRecipes] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const cartKey = user ? `cart_${user.email}` : "guest_cart";
    const cartIds = JSON.parse(localStorage.getItem(cartKey)) || [];

    const fetchRecipes = async () => {
      const recipes = await Promise.all(
        cartIds.map(id => HttpKit.getAllRecipes(id))
      );
      setCartRecipes(recipes.filter(recipe => recipe));
    };

    fetchRecipes();
  }, []);


  return (
    <div className="bg-gray-50 min-h-screen flex items-center">
      <div className="container mx-auto">
        {/* Cart page */}
        <h1 className="text-4xl">This is the cart page</h1>
        {cartRecipes.length === 0 && <p>Your cart is empty</p>}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cartRecipes.map(recipe => (
            <RecipeCard 
            key={recipe.id} 
            recipe={recipe}
            showAddToCart={false} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
