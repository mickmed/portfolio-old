class TechnologiesController < ApplicationController

    def index
    end

    def create
    end


    private 

    def project_params
        params.require(:todo).permit(:task, :picture)
    end
end
