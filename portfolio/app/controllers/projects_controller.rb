# frozen_string_literal: true

class ProjectsController < ApplicationController
  # include ActionController::Serialization
  #   def any_attached?
  #     ActiveStorage::Attachment.where(record_type: Project.to_s, record_id: id).any?
  #   end

  def index
    @project_pics = Project.joins(:picture_attachment)
    @project_pics.map do |p|
        p.image_url = p.picture.service_url
    end

    @project_no_pics = Project.left_joins(:picture_attachment)
                              .group(:id)
                              .having('COUNT(active_storage_attachments) = 0')

    render json: { projects: @project_pics + @project_no_pics}
    # render json: { posts: @projects }, include: :picture
  end

  def show
    @project = Project.find(params[:id])
    @project.picture.attached? && @project_img = @project.picture.service_url 
    @project.image_url = @project_img
    # puts Project.with_attached_picture.find(params[:id]).present?
    render json: { project: @project}
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
    params[:picture].present? && @project.picture.purge &&  @project.picture.attach(params[:picture])
    @project.update(project_params)
    # @project.update(project_params)
    
    logger.debug "logger debug project #{@project}"
    p "project inspect", @project.inspect
    # head :no_content
    render json: {project: @project, pic: @project.picture.service_url}
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




