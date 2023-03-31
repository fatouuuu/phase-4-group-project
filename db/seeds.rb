# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# create some users
user1 = User.create(username: 'alice', email: 'alice@example.com', password: 'password')
user2 = User.create(username: 'bob', email: 'bob@example.com', password: 'password')

# create some ingredients
salt = Ingredient.create(name: 'Salt', quantity: 100, unit_of_measurement: 'g')
sugar = Ingredient.create(name: 'Sugar', quantity: 200, unit_of_measurement: 'g')
flour = Ingredient.create(name: 'Flour', quantity: 300, unit_of_measurement: 'g')

# create some recipes
recipe1 = Recipe.create(user: user1, title: 'Salted caramel brownies', minutes_to_prepare: 60, instructions: 'Bake the brownies and add salted caramel on top.')
recipe1.ingredients << salt
recipe1.ingredients << sugar
recipe1.ingredients << flour

recipe2 = Recipe.create(user: user2, title: 'Vanilla cupcakes', minutes_to_prepare: 30, instructions: 'Mix the batter and bake the cupcakes, then add vanilla frosting on top.')
recipe2.ingredients << sugar
recipe2.ingredients << flour


