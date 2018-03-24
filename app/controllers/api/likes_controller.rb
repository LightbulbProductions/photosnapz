class Api::LikesController < ApplicationController
  def create
    like = Like.new(photo_id: params[:photo_id])
    like.user_id = current_user.id
    if like.save
      render json: like
    else
      render json: like.errors.full_messages
    end
  end

  def destroy
    like = Like.find_by(photo_id: params[:id], user_id: current_user.id)
    if like
      like.destroy
      render json: like
    else
      render json: ['Cannot unlike a photo you have not liked']
    end
  end
end