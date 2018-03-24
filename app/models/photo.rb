class Photo < ActiveRecord::Base
  validates :img_url, :author_id, presence: true
  validates :img_url, uniqueness: true

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

  has_many :likes,
    primary_key: :id,
    foreign_key: :photo_id,
    class_name: :Like

  has_many :comments,
    primary_key: :id,
    foreign_key: :photo_id,
    class_name: :Comment

  has_many :liking_users,
    through: :likes,
    source: :liker

  def liking_user_ids
    liking_users.pluck(:user_id)
  end
end
