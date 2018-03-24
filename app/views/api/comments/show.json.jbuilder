json.extract! @comment, :id, :text, :photo_id
json.author do
  json.extract! @comment.author, :id, :username
end