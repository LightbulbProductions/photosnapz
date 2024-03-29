Rails.application.routes.draw do
	root "static_pages#root"

	namespace :api, defaults: {format: :json} do
      resources :users, only: [:create, :show, :index]
      resources :follows, only: [:create, :destroy]
      resource :session, only: [:create, :destroy]
      resources :photos, only: [:index, :create, :show, :destroy]
      resources :comments, only: [:create, :destroy]
      resources :likes, only: [:create, :destroy]
    end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
