class ApplicationController < ActionController::API
    include ActionController::Cookies
    rescue_from StandardError, with: :standard_error

    # Custom HTTP response
    def app_response(message: 'Success', status: 200, data: nil) 
        render json: {message: message,  data: data}, status: status
    end

    # delete user id in session
    def remove_user
        session.delete :user_id
    end

    # rescue all common errors
    def standard_error exception
        app_response(message: 'failed', data: {info: exception.message}, status: :unprocessable_entity)
    end

end
