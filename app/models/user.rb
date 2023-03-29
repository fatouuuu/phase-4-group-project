class User < ApplicationRecord
    has_secure_password
    has_many :recipes
  
    validates :username, presence: true
    validates :email, presence: true, uniqueness: true
    validates :password, presence: true, length: { minimum: 5 }

end
