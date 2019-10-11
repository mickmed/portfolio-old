class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :title
      t.string :subtitle
      t.string :url
      t.string :image_url

      t.timestamps
    end
  end
end
