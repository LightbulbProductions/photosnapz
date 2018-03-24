class Api::UsersController < ApplicationController
	def create
		@user = User.new(user_params)
		if @user.save
			login(@user)
			render :show
		elsif [params[:user][:username], params[:user][:email], params[:user][:password]].all?(&:empty?)
			render json: ["Please fill out every field"], status: 422
		else
			render json: @user.errors.full_messages, status: 422;
		end
	end

	def show
		@user = User.find_by_username(params[:id])
		render :profile
	end

	private

	def user_params
		params.require(:user).permit(:username, :password, :email, :bio, :img_url)
	end

end

