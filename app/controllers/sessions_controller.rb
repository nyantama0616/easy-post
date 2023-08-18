class SessionsController < ApplicationController
  def index
    
  end

  def new

  end

  def create
    render json: {}, status: :created
  end

  def destroy

  end

  private

  def sign_in_params
    params.require(:user).permit(:e_mail, :password)
  end
end
