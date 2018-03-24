class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.integer :photo_id, null: false
      t.integer :user_id, null: false
      t.string :text, null: false
    end

    add_index :comments, :photo_id
  end
end
