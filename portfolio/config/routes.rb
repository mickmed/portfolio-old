# frozen_string_literal: true

Rails.application.routes.draw do
  # get '/projects', to: 'projects#index'

  root to: 'projects#index'
  resources :projects
  resources :technologies
  resources :traits
end
