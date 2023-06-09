class Ingredient < ApplicationRecord
    has_many :recipe_ingredients
    has_many :recipes, through: :recipe_ingredients
  
    validates :name, presence: true
    validates :quantity, numericality: true
    validates :unit_of_measurement, presence: true

end
