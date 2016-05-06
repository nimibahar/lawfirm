class PagesController < ApplicationController
  def home
    @feedbacks = Feedback.all
  end

  def about
  end


end
