class AddNicknameToFeedbacks < ActiveRecord::Migration
  def change
    add_column :feedbacks, :nickname, :string
  end
end
