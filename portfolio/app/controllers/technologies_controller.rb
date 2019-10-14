class TechnologiesController < ApplicationController

    def index
        @technologies = Technology.all
       
        @technology_pics = Technology.joins(:picture_attachment)
        @technology_pics.map do |p|
            p.image_url = p.picture.service_url
        end
    
        @technology_no_pics = technology.left_joins(:picture_attachment)
                                  .group(:id)
                                  .having('COUNT(active_storage_attachments) = 0')
    
        render json: { technologies: @technologies, technology_pics: @technology_pics + @technology_no_pics }
        # render json: { posts: @projects }, include: :picture
      end
    
      def show
        @project = Project.find(params[:id])
        puts 'show proj', @project.picture
        # @post = Project.with_attached_picture.find(16)
        # @project_img = @project.picture.service_url
        # if Project.find(8).picture.attached?
       
        render json: { project: @project, img: @project_img }
      end
    
      def create
        # puts params()
        puts "request body read", request.body.read
        @project = Project.new(project_params)
        puts @project 
        @project.save
        logger.debug "logger debug project #{@project}"
        p "project inspect", @project.inspect
    
        # render json: {"message":"posted"}
      end
    
      def update
        puts "**************************"
        p project_params
        p params
        # puts "request body read", request.body.read
        puts 'IIIIIIIIII', params[:id]
    
        @project = Project.find(params[:id])
        @project.picture.purge
        @project.picture.attach(params[:picture])
        @project.update(project_params)
        # @project.update(project_params)
        
        logger.debug "logger debug project #{@project}"
        p "project inspect", @project.inspect
        # head :no_content
        render json: @project
      end
    
      def destroy
        @project = Project.find(params[:id])
        @project.destroy
        render json: 'destroyed'
      end
    
      private
    
      def project_params
        params.permit(:id, :title, :picture)
      end
    end