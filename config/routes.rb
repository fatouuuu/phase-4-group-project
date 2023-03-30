Rails.application.routes.draw do
 
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # user
  post '/register', to: 'users#create'
  put '/users/:id', to: 'users#update'
  delete '/users/:id', to: 'users#destroy'
  get '/users/:id', to: 'users#show'


  # sessions
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/me', to: 'sessions#user_session'

  # recipes
  post '/recipes', to: 'recipes#create'
  patch '/recipes/:id', to: 'recipes#update'
  delete '/recipes/:id', to: 'recipes#destroy'
  get '/recipes', to: 'recipes#index'
  get '/recipes/:id', to: 'recipes#show'
end
