class TechnologiesController < ApplicationController

    def index
        @technologies = Technology.all
       
        @technology_pics = Technology.joins(:picture_attachment)
        @technology_pics.map do |p|
            p.image_url = p.picture.service_url
        end
    
        @technology_no_pics = Technology.left_joins(:picture_attachment)
                                  .group(:id)
                                  .having('COUNT(active_storage_attachments) = 0')
    
        render json: { technologies: @technologies, technology_pics: @technology_pics + @technology_no_pics }
      
      end
    
      def show
        @technology= Technology.find(params[:id])
        puts 'show tech', @technology.picture
   
       
        render json: { technology: @technology, img: @technology_img }
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
        params[:picture].present? && @technology.picture.purge &&  @technology.picture.attach(params[:picture])
        @technology.update(technology_params)
      
        
        logger.debug "logger debug technology #{@technology}"
        p "technology inspect", @technology.inspect
        # head :no_content
        render json: @technology
      end
    
      def destroy
        @technology= Technology.destroy
        render json: 'destroyed'
      end
    
    
    
      def technology_params
        params.permit(:id, :name, :icon_url)
      end
    end