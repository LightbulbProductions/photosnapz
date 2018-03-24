class Api::FollowsController < ApplicationController
  def create
    follow = Follow.new(followee_id: params[:id])
    follow.follower_id = current_user.id
    if follow.save
      render json: follow
    else
      render json: follow.errors.full_messages
    end
  end

  def destroy
    follow = Follow.find_by(followee_id: params[:id], follower_id: current_user.id)
    if follow
      follow.destroy
      render json: follow
    else
      render json: ['Cannot unfollow a user you are not following']
    end
  end
end