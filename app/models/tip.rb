class Tip < ActiveRecord::Base
  validates :subject, presence: true
  validates :content, presence: true
end
