class User < ApplicationRecord
    validates :e_mail, presence: true, length: {minimum: 1, maximum: 255}, uniqueness: true
    has_secure_password
end
