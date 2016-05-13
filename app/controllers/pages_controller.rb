class PagesController < ApplicationController
  def home
    @feedbacks = Feedback.all.order(id: :desc).limit(4)
  end

  def about
  end


end
