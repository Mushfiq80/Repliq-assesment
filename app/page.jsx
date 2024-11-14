import Script from "next/script";
import Hero from "../components/Hero/Hero";
import RecipesList from "../components/Recipes/RecipesList";

export default function Home() {
  return (
    <div>
      <Script
        src="https://kit.fontawesome.com/e81ca27c24.js"
        crossOrigin="anonymous"
        strategy="beforeInteractive" 
      />
      <Hero />
      <RecipesList />
    </div>
  );
}
