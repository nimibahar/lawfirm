class FeedbacksController < ApplicationController
  before_action :set_feedback, only: [:show, :edit, :update, :destroy]

  def index
    @feedbacks = Feeback.all
  end

  def show
  end

  def new
    @feedback = Feedback.new
  end

  def create
    @feedback = Feedback.new(feedback_params)
    if @feedback.save
      redirect_to feedback_path(@feedback), notice: "Feedback was successfully added"
    else
      render action: 'new', notice: "Feedback was not save, please try again"
  end

  def edit
  end

  def update
    @feedack.update(feedback_params)

    redirect_to feedback_path(@feedback)
  end

  def destroy
    @feedback.destroy
  end

  private

  def set_feedback
    @feedback = Feedback.find(params[:id])
  end

  def feedback_params
    params.require(:feedback).permit(:client, :description, :avatar)
  end
end
