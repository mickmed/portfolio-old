class DropTableAttributesProjects < ActiveRecord::Migration[5.2]
  def change
    drop_table :attributes_projects
  end
end
