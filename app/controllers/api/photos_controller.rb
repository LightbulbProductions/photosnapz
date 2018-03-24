class Api::PhotosController < ApplicationController
  def create
    @photo = Photo.new(photo_params)
    @photo.author_id = current_user.id
    if @photo.save
      render :show
    else
      render json: @photo.errors.full_messages
    end
  end

  def show
    @photo = Photo.includes(comments: :author).find(params[:id])
  end

  def index
    if params[:all]
      @photos = Photo.includes(comments: :author)
    else
      followees_photos = Photo.includes(comments: :author).where(author: current_user.followees)
      own_photos = Photo.where(author_id: current_user.id)
      @photos = followees_photos + own_photos
    end
    render :feed
  end

  def destroy
  end

  private
  def photo_params
    params.require(:photo).permit(:img_url, :caption, :location)
  end
end