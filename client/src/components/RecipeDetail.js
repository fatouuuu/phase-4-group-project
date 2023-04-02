import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`/recipes/${id}`)
      .then((response) => response.json())
      .then(setRecipe)
      .catch(console.error);
  }, [id]);

  const handleAddToDashboard = () => {
    // add recipe to user's dashboard
    console.log("Added to Dashboard:", recipe.title);
  };

  return (
    <div>
      {recipe ? (
        <div>
          <h2>{recipe.title}</h2>
          <p>
            <em>Preparation Time: {recipe.preparation_time} minutes</em>
            &nbsp;·&nbsp;
            <cite>By {recipe.user.username}</cite>
          </p>
          <p>{recipe.description}</p>
          <h3>Ingredients:</h3>
          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
          <h3>Instructions:</h3>
          <ol>
            {recipe.instructions.map((instruction) => (
              <li key={instruction}>{instruction}</li>
            ))}
          </ol>
          <button onClick={handleAddToDashboard}>Add to Dashboard</button>
        </div>
      ) : (
        <div>
          <h2>Recipe Not Found</h2>
        </div>
      )}
    </div>
  );
}

export default RecipeDetail;
