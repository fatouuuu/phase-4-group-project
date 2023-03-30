class RecipesController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  before_action :authorize, only: [:create, :update, :destroy]

  # POST /recipes
  def create
    recipe = Recipe.create!(recipe_params)
    render json: recipe, status: :created
  end

  # PATCH /recipes/:id
  def update
    recipe = Recipe.find(params[:id])
    recipe.update!(recipe_params)
    render json: recipe
  end

  # DELETE /recipes/:id
  def destroy
    recipe = Recipe.find(params[:id])
    recipe.destroy
    head :no_content
  end

  # GET /recipes
  def index
    recipes = Recipe.all
    render json: recipes
  end

  # GET /recipes/:id
  def show
    recipe = Recipe.find(params[:id])
    render json: recipe
  end

  private

  def recipe_params
    params.permit(:title, :minutes_to_prepare, :instructions)
  end

  def render_not_found_response
    render json: { error: "Recipe not found" }, status: :not_found
  end

  def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors }, status: :unprocessable_entity
  end
  
end
