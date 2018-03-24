class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    if @comment
      @comment.destroy
      render :show
    else
      render json: ['Could not find comment to delete']
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:photo_id, :text)
  end
end