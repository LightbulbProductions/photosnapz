json.partial! "api/users/user", user: @user
json.photos @user.photos.reverse.each do |photo|
  json.extract! photo, :id, :img_url
end
json.following @user.follower_ids.include?(current_user.id)