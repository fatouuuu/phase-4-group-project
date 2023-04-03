
import React, { useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import logo from '../assets/images/bon-appetit.svg'
import '../App.css'


function Navbar() {
  return (
    <nav className="nav">
      <ul>
        <li>
        <img className='logo' src={logo}  alt='bon appetite logo'/>
        </li>
        <li>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/recipes" activeClassName="active">
            Recipes
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" activeClassName="active">
            Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

function Home({ user }) {
  const [title, setTitle] = useState("");
  const [minutesToPrepare, setminutesToPrepare] = useState("");
  const [instructions, setInstructions] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [featuredRecipes, setFeaturedRecipes] = useState([]);
  const history = useNavigate();

  useEffect(() => {
    fetch("/recipes?limit=3")
      .then((response) => response.json())
      .then((data) => setFeaturedRecipes(data));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        instructions,
        minutes_to_prepare: minutesToPrepare,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        history.push("/");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <>
      <Navbar />
      <div className="featured-recipes">
        <h2 className="featured-heading">Featured Recipes</h2>
        <ul>
        {featuredRecipes.slice(0, 2).map((recipe) => (
          <li key={recipe.id}>
            <h3 className="featured-title">{recipe.title}</h3>
            <p className="featured-time">Prep Time: {recipe.minutes_to_prepare} minutes</p>
            <p className="featured-instructions">{recipe.instructions}</p>
          </li>
        ))}
        </ul>
        <NavLink to="/recipes">See All Recipes</NavLink>
      </div>
      <div className="create-recipe">
        <h2>Create Recipe</h2>
        <form onSubmit={handleSubmit}>
         <div className="form-row">
           <label htmlFor="recipe-title">Title</label>
            <input
              type="text"
              id="recipe-title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Recipe Name"
            />
          </div>
          <div className="form-row">
            <label htmlFor="prep-time">Preparation Time</label>
            <input
              type="number"
              id="prep-time"
              value={minutesToPrepare}
              onChange={(e) => setminutesToPrepare(e.target.value)}
            />
          </div>
          <div className="form-row">
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              rows="10"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
            />
          </div>
          <div className="form-row">
            <button color="primary" type="submit">
              {isLoading ? "Loading..." : "Submit Recipe"}
            </button>
          </div>
        </form>
      </div>

    </>
  );
}

export default Home;

