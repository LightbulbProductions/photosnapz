class User < ActiveRecord::Base


	attr_reader :password

	validates :username, :email, :password_digest, :session_token, presence: true
	validates :username, :email, uniqueness: true
	validates :password, length: {minimum: 7}, allow_nil: :true

	after_initialize :ensure_session_token
	before_validation :ensure_session_token_uniqueness

	has_many :photos, foreign_key: :author_id

  has_many :likes,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Like

  has_many :liked_photos,
    through: :likes,
    source: :photo

	has_many :in_follows,
		primary_key: :id,
		foreign_key: :followee_id,
		class_name: :Follow

	has_many :followers,
		through: :in_follows,
		source: :follower

	has_many :out_follows,
		primary_key: :id,
		foreign_key: :follower_id,
		class_name: :Follow

	has_many :followees,
		through: :out_follows,
		source: :followee

	def password= password
		self.password_digest = BCrypt::Password.create(password)
		@password = password
	end

	def self.find_by_credentials username, password
		user = User.find_by(username: username)
		return nil unless user
		user.password_is?(password) ? user : nil
	end

	def password_is? password
		BCrypt::Password.new(self.password_digest).is_password?(password)
	end

	def reset_session_token!
		self.session_token = new_session_token
		ensure_session_token_uniqueness
		self.save
		self.session_token
	end

	def follower_ids
		Follow.where(followee_id: self.id).pluck(:follower_id)
	end

	def num_followees
		self.followees.count
	end
	
	private

	def ensure_session_token
		self.session_token ||= new_session_token
	end

	def new_session_token
		SecureRandom.base64
	end

	def ensure_session_token_uniqueness
		while User.find_by(session_token: self.session_token)
			self.session_token = new_session_token
		end
	end
end