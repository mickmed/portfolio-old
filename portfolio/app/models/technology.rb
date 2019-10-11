class Technology < ApplicationRecord
    has_and_belongs_to_many :projects
    has_one_attached :picture
end
