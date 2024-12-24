import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import Footer from "./Footer";


const SearchRecipe = () => {
  const [search, setSearch] = useState("");
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  const [visibleRecipes, setVisibleRecipes] = useState(4); // Control the number of recipes shown

  async function getSearchedRecipes() {
    const res = await fetch(`https://dummyjson.com/recipes/search?q=${search}`);
    const data = await res.json();
    setSearchedRecipes(data.recipes);
  }

  useEffect(() => {
    if (search === "") {
      setSearchedRecipes([]);
      return;
    }
    getSearchedRecipes();
  }, [search]);

  const showAllRecipes = () => {
    setVisibleRecipes(searchedRecipes.length); // Set visible recipes to total count
  };

  return (
    <div className="search-bar">
      <button>
        <Link to="search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 -960 960 960"
            width="20px"
            fill="undefined"
          >
            <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
          </svg>
        </Link>
      </button>
      <input
        type="search"
        placeholder="Search The Recipe"
        onChange={(e) => {
          setSearch(e.target.value);
          setVisibleRecipes(4); // Reset visible recipes when a new search occurs
        }}
      />

      <ol
        className="order-list"
        style={{ display: "flex", flexDirection: "column" }}
      >
        {searchedRecipes.slice(0, visibleRecipes).map((recipe) => {
          return (
            <div className="search-engine" key={recipe.id}>
              <Link to={`/recipe/${recipe.id}`}>
                <img src={recipe.image} alt={recipe.name} />
                {recipe.name}{" "}
              </Link>
            </div>
          );
        })}

        <div className="recipe-button">
          {visibleRecipes < searchedRecipes.length && (
            <button onClick={showAllRecipes}>See All</button>
          )}
        </div>
      </ol>
<Footer/>
  
    </div>
  );
};

export default SearchRecipe;
