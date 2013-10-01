class Api::PostsController < ApplicationController

  def create
    @post = Post.new(params[:post])
    if @post.save
      render json: @post
    else
      head status: 422
    end
  end


end

