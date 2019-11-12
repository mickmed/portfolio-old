class TraitsController < ApplicationController

    def index
        @traits = Trait.all.includes(:projects)
        @projects = []
        @traits.each_with_index do |trait, i|
          @projects.push(trait.projects)
        end
        render json:{traits: @traits, projects: @projects}
        # @traits_pics = trait.joins(:picture_attachment)
        # @traits_pics.map do |p|
        #     p.image_url = p.picture.service_url
        # end
    
        # @traits_no_pics = trait.left_joins(:picture_attachment)
        #                           .group(:id)
        #                           .having('COUNT(active_storage_attachments) = 0')
    
        # render json: { traits: @traits_pics + @traits_no_pics }
      
      end
    
      def show
        @trait = Trait.find(params[:id])
        
        # @trait.picture.attached? && @trait_img = @trait.picture.service_url && @trait.image_url = @trait_img
        # puts Project.with_attached_picture.find(params[:id]).present?
        render json: { trait: @trait, projects: @trait.projects}
      end
    
      def create
        # puts params()
        puts "request body read", request.body.read 
        @trait = Trait.new(trait_params)
        puts @trait 
        @trait.save
        logger.debug "logger debug trait #{@trait}"
        p "techtraitinspect", @trait.inspect
    
        # render json: {"message":"posted"}
      end
    
      def update
        puts "**************************"
        p trait_params
        p params
        # puts "request body read", request.body.read
        puts 'IIIIIIIIII', params[:id]
    
        @trait = Trait.find(params[:id])
        # params[:picture].present? && @trait.picture.purge 
        # params[:picture].present? && @trait.picture.attach(params[:picture])
        @trait.update(trait_params)
      
        
        logger.debug "logger debug trait #{@trait}"
        p "trait inspect", @trait.inspect
        # head :no_content
        render json: @trait
      end
    
      def destroy
        @trait= Trait.find(params[:id])
        @trait.destroy
        render json: 'destroyed'
      end
    

    
      def trait_params
        params.permit(:id, :name, :local_url, project_ids:[])
      end
    end
