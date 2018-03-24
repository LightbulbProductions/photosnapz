json.extract! @photo, :id, :author, :img_url, :caption, :location, :created_at
json.liked_by_current_user @photo.liking_user_ids.include?(current_user.id)
json.comments({})
json.comments do
  @photo.comments.each do |comment|
    json.set! comment.id do
      json.extract! comment, :id, :text
      json.author do
        json.extract! comment.author, :id, :username
      end
    end
  end
end