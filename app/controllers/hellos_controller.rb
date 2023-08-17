class HellosController < ApplicationController
    def index
        render json: {text: "hello panda"}
    end
end
