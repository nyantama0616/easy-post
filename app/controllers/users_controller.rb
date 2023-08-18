class UsersController < ApplicationController
    def index
        
    end

    def create
        # logger.debug(user_parms)
        begin
            user = User.create!(user_parms)
            render status: :created
        rescue => e
            logger.debug(e)
            render json: { message: e.message }, status: :not_found
        end
    end

    private

    def user_parms
        params.require(:user).permit(:e_mail, :password, :password_confirmation)
    end
end
