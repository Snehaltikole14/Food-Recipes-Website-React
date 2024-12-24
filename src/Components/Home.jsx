import React, { useEffect, useState } from "react";
import CardComponent, { CardComponent1,CardComponent2 } from "./RecipeCard";
import Footer from "./Footer";


const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [visibleRecipes, setVisibleRecipes] = useState(10); 

  async function getRecipes() {
    try {
      const data = await fetch("https://dummyjson.com/recipes");

      const recipesObj = await data.json();

      setRecipes(recipesObj.recipes);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getRecipes();
  }, []);

  const loadMoreRecipes = () => {
    setVisibleRecipes((prevVisible) => prevVisible + 10); // Increment visible recipes
  };
 
     
    
 

  return (
    <>
      {/* <input type="text" onChange={(e) => setSearch(e.target.value)} /> */}
      {/* <div className="hero-section"></div> */}
      <div className="front-image">
        <img src="Style 01 1.png" alt="" />
      </div>

      <h1>Super Delicious</h1>
      <div className="recipes-container">
        {recipes.slice(0, 3).map((recipeObj) => {
          return (
            <CardComponent
              key={recipeObj.id}
              id={recipeObj.id}
              image={recipeObj.image}
              name={recipeObj.name}
              rating={recipeObj.rating}
              reviewCount={recipeObj.reviewCount}
            />
          );
        })}
      </div>
      <h1>Sweet Tooth</h1>

      <div className="recipes-container">
        {recipes.slice(3, 6).map((recipeObj) => {
          return (
            <CardComponent
              key={recipeObj.id}
              id={recipeObj.id}
              image={recipeObj.image}
              name={recipeObj.name}
              rating={recipeObj.rating}
              reviewCount={recipeObj.reviewCount}
            />
          );
        })}
      </div>

      <h1>Popular Categories</h1>

      <div className="recipes-container2">
        {recipes.slice(1, 7).map((recipeObj) => {
          return (
            <CardComponent2
              key={recipeObj.id}
              id={recipeObj.id}
              image={recipeObj.image}
              name={recipeObj.name}
              rating={recipeObj.rating}
              reviewCount={recipeObj.reviewCount}
            />
          );
        })}
      </div>

      <div className="middle-image">
        <img src="Newsletter 1.png" alt="" />
      </div>

      <h1>Latest Recipes</h1>
      <div className="recipes-container1">
        {recipes.slice(visibleRecipes).map((recipeObj) => {
          return (
            <CardComponent1
              key={recipeObj.id}
              id={recipeObj.id}
              image={recipeObj.image}
              name={recipeObj.name}
              rating={recipeObj.rating}
              reviewCount={recipeObj.reviewCount}
            />
          );
        })}
        </div>

        <div className="button-container">
          {visibleRecipes < recipes.length && (
            <button onClick={loadMoreRecipes}>{visibleRecipes? "Load More" :"Load Less"}</button>
        
          )}
        </div>
        <Footer />
      
    </>
  );

};






export default Home;
