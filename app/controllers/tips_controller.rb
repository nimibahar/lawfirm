class TipsController < ApplicationController
  before_action :set_tip, only: [:show, :edit, :update, :destroy]

  def index
    @tips = Tip.all
  end

  def show

  end

  def new
    @tip = Tip.new
  end

  def create
    @tip = Tip.new(tip_params)
    @tip.save

    redirect_to tip_path(@tip)
  end

  def edit

  end

  def update
    @tip.update(tip_params)

    redirect_to tip_path(@tip)
  end

  def destroy
    @tip.destroy

    redirect_to tips_path, notice: "Your tip has been deleted"
  end

  private

  def set_tip
    @tip = Tip.find(params[:id])
  end

  def tip_params
    params.require(:tip).permit(:subject, :content)
  end
end
