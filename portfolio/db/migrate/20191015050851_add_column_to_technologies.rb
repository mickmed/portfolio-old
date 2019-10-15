class AddColumnToTechnologies < ActiveRecord::Migration[5.2]
  def change
    add_column :technologies, :image_url, :string
  end
end
