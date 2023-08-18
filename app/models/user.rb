class User < ApplicationRecord
    validates :e_mail, presence: true, length: {minimum: 1, maximum: 255}, uniqueness: true
    validates :password, presence: true, length: {minimum: 1, maximum: 255}
end
