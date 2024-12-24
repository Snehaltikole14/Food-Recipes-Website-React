import "./App.css";
import "./Components/home.css"
import "./Components/footer.css";
import "./Components/RecipePage.css"
import "./Components/SearchRecipe.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import RecipePage from "./Components/RecipePage";
import React from 'react'
import { Link } from 'react-router-dom';
import SearchRecipe from "./Components/SearchRecipe";


function App() {
  return (

    <BrowserRouter>
 <div className="header">
    <h3>TasteBite</h3>
   <p> <Link to="/">HomePage</Link></p>
    <p><Link to="recipe/:id">RecipePage</Link></p>
    <p> <Link to="search"><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="undefined"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg></Link> </p>
   </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="recipe/:id" element={<RecipePage />} />
          <Route path="search" element={<SearchRecipe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;