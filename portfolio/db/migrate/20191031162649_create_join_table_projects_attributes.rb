class CreateJoinTableProjectsAttributes < ActiveRecord::Migration[5.2]
  def change
    create_join_table :projects, :attributes do |t|
      # t.index [:project_id, :attribute_id]
      # t.index [:attribute_id, :project_id]
    end
  end
end
