import React, { useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <span className="app-name">Bon Appetit</span>
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
        <h2>Featured Recipes</h2>
        <ul>
          {featuredRecipes.map((recipe) => (
            <li key={recipe.id}>
              <h3>{recipe.title}</h3>
            </li>
          ))}
        </ul>
        <NavLink to="/recipes">See All Recipes</NavLink>
      </div>
      <div className="create-recipe">
        <h2>Create Recipe</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Recipe Name"
          />
          <label htmlFor="minutesToPrepare">Preparation Time</label>
          <input
            type="number"
            id="minutesToPrepare"
            value={minutesToPrepare}
            onChange={(e) => setminutesToPrepare(e.target.value)}
          />
          <label htmlFor="instructions">Instructions</label>
          <textarea
            id="instructions"
            rows="10"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          />
          <button color="primary" type="submit">
            {isLoading ? "Loading..." : "Submit Recipe"}
          </button>
        </form>
      </div>
    </>
  );
}

export default Home;