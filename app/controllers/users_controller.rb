class UsersController < ApplicationController
    def index
        
    end

    def create
        begin
            user = User.create!(encrypt(user_parms))
            render status: :created
        rescue => e
            logger.debug(e)
            render json: { message: e.message }, status: :not_found
        end
    end

    private

    def user_parms
        params.require(:user).permit(:e_mail, :password)
    end

    def encrypt(user)
        user
    end
end
