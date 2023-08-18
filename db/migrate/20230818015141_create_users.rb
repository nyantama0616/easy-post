class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :e_mail, null: false
      t.string :password, null: false
      t.timestamps
    end
  end
end
