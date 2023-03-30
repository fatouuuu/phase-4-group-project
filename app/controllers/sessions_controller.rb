class SessionsController < ApplicationController
  # POST /login 
  def create
    sql = "username = :username OR email = :email"
    user = User.where(sql, {username: user_params[:username], email: user_params[:email] }).first
    if user&.authenticate(user_params[:password])
        session[:user_id] = user.id
        app_response(message: 'Login was successful', status: :ok, data: user)
    else
        app_response(message: 'Invalid username or password', status: :unauthorized)
    end
  end

  # DELETE /logout
  def destroy
    remove_user
    app_response(message: 'Logout successful')
  end

  # GET /me : get logged in user [session]
  def user_session
    user = User.find(session[:user_id].to_i)
    if user 
      app_response(data: user)
    else
      app_response(message: 'Not authorized. Please login or sign up', status: :not_found)
    end

  end

  private
  def user_params
    params.permit(:username, :email, :password)
  end
end
