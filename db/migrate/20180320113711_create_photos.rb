class CreatePhotos < ActiveRecord::Migration[5.1]
  def change
    create_table :photos do |t|
     t.string :img_url, null: false
     t.integer :author_id, null: false
     t.string :location, default: ""
     t.string :caption, default: ""

     t.timestamps null: false
    end

    add_index :photos, :author_id
    add_index :photos, :location
    add_index :photos, :img_url, unique: true
  end
end
