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
    <div>
      {recipes.length > 0 ? (
        recipes.map((recipe) => (
          <div key={recipe.id}>
            <h2>{recipe.title}</h2>
            <p>
              <em>Preparation Time: {recipe.preparation_time} minutes</em>
              &nbsp;·&nbsp;
              <cite>By {recipe.user.username}</cite>
            </p>
            <p>{recipe.description}</p>
            <Link to={`/recipes/${recipe.id}`}>Check Recipe</Link>
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
