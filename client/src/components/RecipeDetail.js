import React, { useState, useEffect } from "react";
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
    <div className="recipe-container">
  {recipe ? (
    <div className="recipe-card">
      <img className="recipe-image" src={recipe.image_url} alt="recipe_image" />
      <h2 className="recipe-title">{recipe.title}</h2>
      <p className="recipe-prep-time">
        <em>Preparation Time: {recipe.minutes_to_prepare} minutes</em>
      </p>
      <div className="recipe-instructions">
        <h3>Instructions:</h3>
        <ul>{recipe.instructions.split(',').map((instruction, index) => <li key={index}>{instruction}</li>)}</ul>
      </div>
      <button className="add-to-dashboard-btn" onClick={handleAddToDashboard}>Add to Dashboard</button>
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

