class Project < ApplicationRecord
    has_one_attached :picture
    has_and_belongs_to_many :technologies
    has_and_belongs_to_many :traits

end
