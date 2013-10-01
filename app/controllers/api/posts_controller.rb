class Api::PostsController < ApplicationController

  def create
    @post = Post.new(params[:post])
    if @post.save
      render json: @post
    else
      head status: 422
    end
  end

  def index
    render json: Post.all
  end

  def destroy
    @post = Post.find(params[:id])
    if @post
      @post.destroy

      head status: :ok
    else
      head status: 404
    end
  end


end

