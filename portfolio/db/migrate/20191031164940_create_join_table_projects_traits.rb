class CreateJoinTableProjectsTraits < ActiveRecord::Migration[5.2]
  def change
    create_join_table :projects, :traits do |t|
      # t.index [:project_id, :trait_id]
      # t.index [:trait_id, :project_id]
    end
  end
end
