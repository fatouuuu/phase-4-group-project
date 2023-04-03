import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/recipes")
    .then((response) => response.json())
      .then(setRecipes)
      .catch(console.error);
  }, []);

  return (
    <div className="recipes-list">
  {recipes.length > 0 ? (
    recipes.map((recipe) => (
      <div className="recipe-item" key={recipe.id}>
        <h2 className="recipe-title">{recipe.title}</h2>
        <p className="recipe-prep-time">
          <em>Preparation Time: {recipe.minutes_to_prepare} minutes</em>
        </p>
        <p className="recipe-description">{recipe.description}</p>
        <Link className="check-recipe-link" to={`/recipes/${recipe.id}`}>Check Recipe</Link>
      </div>
    ))
  ) : (
    <div>
      <h2>No Recipes Found</h2>
      <Link to="/new">Create a New Recipe</Link>
    </div>
  )}
</div>
  );
}

export default RecipeList;
