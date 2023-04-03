# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Seeding database..."

# Create some users
User.create(username: 'john_doe', email: 'john@example.com', password: 'password123', bio: 'I love cooking!')
User.create(username: 'jane_doe', email: 'jane@example.com', password: 'password456', bio: 'Food enthusiast')

# Create some recipes
Recipe.create(user_id: 1, title: 'Grilled Chicken with Broccoli', minutes_to_prepare: 35, instructions: '1. Preheat grill to medium-high heat, 2. Season chicken breasts with salt and pepper, 3. Grill chicken for 6-7 minutes on each side or until fully cooked, 4. Steam broccoli until tender, 5. Serve chicken with broccoli on the side.', image_url: 'https://gimmedelicious.com/wp-content/uploads/2020/01/Skillet-Garlic-Butter-Chicken-Broccoli-3.jpg')
Recipe.create(user_id: 2, title: 'Fried Rice', minutes_to_prepare: 25, instructions: '1. Cook rice according to package directions, 2. Whisk eggs and milk together in a small bowl, 3. Melt butter in a large skillet over medium heat, 4. Add egg mixture and cook until set, stirring occasionally, 5. Add cooked rice and broccoli to skillet and stir to combine, 6. Serve immediately.', image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUtxAj0kPi_kkTYqiAgyWAqmFcx6wJGdODPhZBgRMHkTPDKZhn6YXw47y8tarpBHd0n-w&usqp=CAU')
Recipe.create(user_id: 1, title: 'Pancakes', minutes_to_prepare: 20, instructions: '1. In a medium bowl, whisk together flour, sugar, baking powder, and salt, 2. In a separate bowl, whisk together milk, egg, and melted butter, 3. Add wet ingredients to dry ingredients and stir until just combined, 4. Heat a nonstick pan over medium heat, 5. Pour 1/4 cup of batter onto the pan for each pancake, 6. Cook until bubbles appear on the surface and the edges start to dry, 7. Flip and cook until golden brown, 8. Serve with your favorite toppings.', image_url: 'https://static.onecms.io/wp-content/uploads/sites/43/2022/02/16/21014-Good-old-Fashioned-Pancakes-mfs_001.jpg')
Recipe.create(user_id: 1, title: 'Tomato Sauce', minutes_to_prepare: 30, instructions: '1. Heat the olive oil in a large pot, 2. Add the onions and garlic and cook until soft, 3. Add the tomatoes and simmer for 20 minutes, 4. Blend the sauce until smooth, 5. Season with salt and pepper to taste.', image_url: 'https://natashaskitchen.com/wp-content/uploads/2020/02/Marinara-Sauce-2.jpg')
Recipe.create(user_id: 2, title: 'Garlic Bread', minutes_to_prepare: 10, instructions: '1. Preheat the oven to 350°F, 2. Cut the bread in half lengthwise, 3. Mix the butter and garlic in a bowl, 4. Spread the butter mixture on the bread, 5. Bake for 10 minutes.', image_url: 'https://cdn.loveandlemons.com/wp-content/uploads/2021/12/garlic-bread-recipe.jpg')

# Create some ingredients
Ingredient.create(name: "Chicken", quantity: 2, unit_of_measurement: "pieces")
Ingredient.create(name: "Rice", quantity: 1, unit_of_measurement: "cup")
Ingredient.create(name: "Brocolli", quantity: 1, unit_of_measurement: "head")
Ingredient.create(name: "Carrots", quantity: 3, unit_of_measurement: "medium")
Ingredient.create(name: "Olive oil", quantity: 2, unit_of_measurement: "tablespoons")
Ingredient.create(name: "Garlic", quantity: 3, unit_of_measurement: "cloves")
Ingredient.create(name: "Salt", quantity: 1/2, unit_of_measurement: "teaspoon")
Ingredient.create(name: "Pepper", quantity: 1/4, unit_of_measurement: "teaspoon")
Ingredient.create(name: "Eggs", quantity: 2, unit_of_measurement: "large")

# Create some recipe-ingredients
RecipeIngredient.create(recipe_id: 1, ingredient_id: 1)
RecipeIngredient.create(recipe_id: 1, ingredient_id: 2)
RecipeIngredient.create(recipe_id: 2, ingredient_id: 3)
RecipeIngredient.create(recipe_id: 2, ingredient_id: 4)
RecipeIngredient.create(recipe_id: 3, ingredient_id: 5)
RecipeIngredient.create(recipe_id: 3, ingredient_id: 6)
RecipeIngredient.create(recipe_id: 3, ingredient_id: 7)
RecipeIngredient.create(recipe_id: 3, ingredient_id: 8)

puts "Done seeding!"