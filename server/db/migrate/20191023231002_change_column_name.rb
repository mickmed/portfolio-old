class ChangeColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :projects, :url, :site_url
    rename_column :technologies, :icon_url, :local_url
    add_column :projects, :local_url, :string
  end
end
