class UsersController < ApplicationController
  # POST /register
  def create
    user = User.create(user_params)
    if user.valid?
      app_response(message: "You've been registered successfully", status: :created, data: user)
    else
      app_response(message: "Something went wrong with your registration", status: :unprocessable_entity, data: user.errors.full_messages)
    end
  end

  def update
  end

  def destroy
  end

  def show
  end

  private
  def user_params
    params.permit(:username, :email, :bio, :password)
  end
end
