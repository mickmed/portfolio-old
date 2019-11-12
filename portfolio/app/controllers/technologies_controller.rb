class TechnologiesController < ApplicationController

    def index
        @technologies = Technology.all.includes(:projects)

        @projects = []
        @technologies.each_with_index do |tech, i|
          @projects.push(tech.projects)
        end
        
        render json:{technologies: @technologies, projects: @projects}
        # @technologies_pics = Technology.joins(:picture_attachment)
        # @technologies_pics.map do |p|
        #     p.image_url = p.picture.service_url
        # end
    
        # @technologies_no_pics = Technology.left_joins(:picture_attachment)
        #                           .group(:id)
        #                           .having('COUNT(active_storage_attachments) = 0')
    
        # render json: { technologies: @technologies_pics + @technologies_no_pics }
      
      end
    
      def show
        @technology = Technology.find(params[:id])
        
        @technology.picture.attached? && @technology_img = @technology.picture.service_url && @technology.image_url = @technology_img
        # puts Project.with_attached_picture.find(params[:id]).present?
        render json: { technology: @technology, projects: @technology.projects}
      end
    
      def create
        # puts params()
        puts "request body read", request.body.read 
        @technology = Technology.new(technology_params)
        puts @technology 
        @technology.save
        logger.debug "logger debug technology #{@technology}"
        p "techtechnologyinspect", @technology.inspect
    
        # render json: {"message":"posted"}
      end
    
      def update
        puts "**************************"
        p technology_params
        p params
        # puts "request body read", request.body.read
        puts 'IIIIIIIIII', params[:id]
    
        @technology = Technology.find(params[:id])
        params[:picture].present? && @technology.picture.purge 
        params[:picture].present? && @technology.picture.attach(params[:picture])
        @technology.update(technology_params)
      
        
        logger.debug "logger debug technology #{@technology}"
        p "technology inspect", @technology.inspect
        # head :no_content
        render json: @technology
      end
    
      def destroy
        @technology= Technology.find(params[:id])
        @technology.destroy
        render json: 'destroyed'
      end
    

    
      def technology_params
        params.permit(:id, :name, :image_url, :local_url, :picture, project_ids:[])
      end
    end