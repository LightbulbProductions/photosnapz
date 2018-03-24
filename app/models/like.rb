class Like < ActiveRecord::Base
  validates :photo_id, :user_id, presence: true
  validates :photo_id, uniqueness: { scope: :user_id }

  belongs_to :liker,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :photo,
    primary_key: :id,
    foreign_key: :photo_id,
    class_name: :Photo
end