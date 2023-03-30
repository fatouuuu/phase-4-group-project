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

  # PUT /users/:id
  def update
    user = User.find(params[:id])
    if user.update(user_params)
      app_response(message: "User updated successfully", status: :ok, data: user)
    else
      app_response(message: "Unable to update user", status: :unprocessable_entity, data: user.errors.full_messages)
    end
  end
 
  

  # DELETE /users/:id
  def destroy
    user = User.find(params[:id])
    user.destroy
    app_response(message: "User deleted successfully", status: :ok, data: user)
  end

  # GET /users/:id
  def show
    user = User.find(params[:id])
    app_response(message: "User found", status: :ok, data: user)
  end

  private
  def user_params
    params.permit(:username, :email, :bio, :password)
  end
end
