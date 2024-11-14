# Recipe App

# Project Bug Fixing and Updates:

1. In Modal.jsx, replaced <SingleRecipe /> with {children} inside <Dialog.Panel>. This allows the Modal to render any component passed to it as children, enabling it to receive props like id and setIsOpen dynamically.
Search Functionality in RecipeList

2. Resolved search issue in RecipeList by using two data fetch types: TopRecipes and AllRecipes. TopRecipes is displayed by default. The search functionality now uses a useEffect hook to listen for searchQuery, filtering AllRecipes based on input text and updating displayed results accordingly.
Warning: Unique "key" Prop in RecipeList

3. The warning regarding the missing unique key prop was resolved by updating the key in <RecipeCard> to use recipe?.idMeal instead of recipe?.id. This ensures each child in the list has a unique identifier.


# Features Implemented:

1. Modal Component for Recipe Details
- Technical: A reusable Modal component was created using @headlessui/react. This component dynamically renders recipe details based on the recipe selected, with SingleRecipe passed as children for modular design.
- Non-Technical: Users can view detailed information about a recipe in a pop-up window, allowing for a clean and focused viewing experience.

2. Search Functionality with Dynamic Filtering
- Technical: A search bar in RecipesList filters recipes by name, defaulting to "Top Recipes" but switching to "All Recipes" when a search query is active. The filtering logic uses useEffect to re-fetch data based on search input.
- Non-Technical: Users can search for recipes by name, making it easy to find specific dishes, while popular recipes display initially for easy browsing.

3. Recipe Cards with Unique Keys
- Technical: Each recipe card now has a unique key prop, using idMeal from the API to resolve React’s list key warnings.
- Non-Technical: This behind-the-scenes fix ensures efficient rendering and avoids technical issues when displaying recipe cards.

4. Persistent and Clearable Cart Functionality
- Technical: Recipes added to the cart are saved in localStorage under a unique user key. Upon page load, the cart contents are fetched, displayed, and then cleared from localStorage for a reset on refresh.
- Non-Technical: Users can add recipes to their cart, view saved recipes, and see an empty cart after refreshing, keeping the experience streamlined and up-to-date.

5. Responsive UI with Optimized Image Loading
- Technical: Components like RecipeCard and SingleRecipe use next/image for efficient image rendering, and the layout adapts to different screen sizes.
- Non-Technical: The interface adjusts to fit all screen sizes, so users can comfortably explore recipes on mobile and desktop devices with optimized image loading for faster performance.

*** New Pages Added ***
6. All-Recipes Page
Purpose: Displays a full list of available recipes for users to explore beyond just the top or featured recipes.
Functionality: Users can browse and search through an extensive list of recipes, helping them find dishes based on their interests or dietary preferences.

7. Cart Page
Purpose: Allows users to view and manage recipes they’ve added to their cart for quick reference or saving.
Functionality: Recipes added to the cart are displayed here. The cart resets on page refresh, giving users a fresh start for each session.

8. Login Page
Purpose: Provides a secure interface for users to log into their accounts to access personalized features.
Functionality: Users can enter their credentials to access saved data, like cart contents linked to their account.

9. Sign-Up Page
Purpose: Enables new users to create an account on the platform, unlocking additional features and personalization.
Functionality: Users can register with their details, setting up an account that allows for a tailored experience and data persistence.

# Time Estimate
- Around 16 hours needed to done this project. 

