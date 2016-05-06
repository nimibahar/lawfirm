class CreateFeedbacks < ActiveRecord::Migration
  def change
    create_table :feedbacks do |t|
      t.string :client
      t.text :description

      t.timestamps null: false
    end
  end
end
