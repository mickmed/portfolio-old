class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :title, :picture
  
  def picture
    # rails_blob_path(object.picture, only_path: true) if object.picture.attached?
  end

end
