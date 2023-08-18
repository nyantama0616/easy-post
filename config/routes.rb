Rails.application.routes.draw do
  resources :hellos, only: [:index]
  resources :users, only: [:index, :create]
  
  get "/is-signed-in", to: "sessions#index"
  get "/sign-in", to: "sessions#new"
  post "/sign-in", to: "sessions#create"
  delete "/sign-out", to: "sessions#destroy"
end
