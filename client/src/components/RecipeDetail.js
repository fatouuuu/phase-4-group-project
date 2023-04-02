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
    <div>
      {recipe ? (
        <div>
          <img src={recipe.image_url} alt='recipe_image'/>
          <h2>{recipe.title}</h2>
          <p>
            <em>Preparation Time: {recipe.minutes_to_prepare} minutes</em>
           
          </p>
          
          
            <div>
              <h3>Instructions:</h3>
              {recipe.instructions.split('.').map(instruction => <li>{instruction}</li>)}
            </div>
         
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

