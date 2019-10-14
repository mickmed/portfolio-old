# frozen_string_literal: true

Rails.application.routes.draw do
  # get '/projects', to: 'projects#index'

  root to: 'projects#index'
  resources :projects

  root to: 'technologies#index'
  resources :technologies
end
