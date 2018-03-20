class Api::SessionsController < ApplicationController

	def create
		@user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
			login(@user)
			render "api/users/show"
		else
      if User.find_by(username: params[:user][:username])
  			render(
          json: ["Hmm... That password isn't right."],
          status: 401
        )
			elsif params[:user][:username].empty? && params[:user][:password].empty?
				render(
					json: ["Please fill out every field"],
					status: 401
				)
      elsif params[:user][:username].empty?
				render(
					json: ["Whoops, please give a username!"],
					status: 401
				)
			else
        render(
          json: ["Oops! That username isn't registered..."],
          status: 401
        )
      end
		end
	end

	def destroy
		@user = current_user
		if @user
			logout
			render "api/users/show"
		else
			render(
        json: ["Nobody signed in"],
        status: 404
      )
		end
	end

end