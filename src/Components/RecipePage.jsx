import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



const RecipePage = () => {
  const [recipe, setRecipe] = useState();
  const { id } = useParams();

  async function getRecipe() {
    try {
      const data = await fetch(`https://dummyjson.com/recipes/${id}`);

      const recipe = await data.json();

      setRecipe(recipe);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getRecipe();
  }, []);

  return (
    <div>
      <h1>{recipe?.name}</h1>
      <div className="recipes-info">
        <img src={recipe?.image} alt="" width={400} />
        <h2 className="ingredients">Ingredients :-</h2>
        <ol>
          {recipe?.ingredients.map((ing) => {
            return <li>{ing}</li>;
          })}
        </ol>

        <h2 className="instructions">Instructions :-</h2>
        <ol>
         {recipe?.instructions.map((inst) => {
            return <li>{inst}</li>;
          })}
        
         
        </ol>
      </div>
    </div>
  );
};

export default RecipePage;