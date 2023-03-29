Rails.application.routes.draw do
  get 'ingredients/index'
  get 'sessions/create'
  get 'sessions/destroy'
  get 'recipes/create'
  get 'recipes/update'
  get 'recipes/destroy'
  get 'recipes/index'
  get 'recipes/show'
  get 'users/create'
  get 'users/update'
  get 'users/destroy'
  get 'users/show'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
