class ServicesController < ApplicationController
  before_action :find_service, except: [:index]
  def index
    if params[:category].blank?
      @services = Service.all.order('created_at ASC')
    else
      @category_id = Category.find_by(name: params[:category]).id
      @services = Service.where(category_id: @category_id).order('created_at ASC')
    end
  end

  def show
  end

  def new
    @service = Service.new
  end

  def create
    @service = Service.new(service_params)

    if @service.save
      redirect_to @service
    else
      render 'new'
    end
  end

  def edit
  end

  def update
    if @service.update(service_params)
      redirect_to @service
    else
      render 'edit'
    end
  end

  def destroy
  end

  private

  def service_params
    params.require(:service).permit(:title, :description)
  end

  def find_service
    @service = Service.find(params[:id])
  end
end
