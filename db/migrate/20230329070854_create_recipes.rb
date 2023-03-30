class CreateRecipes < ActiveRecord::Migration[7.0]
  def change
    create_table :recipes do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :title
      t.integer :minutes_to_prepare
      t.text :instructions
      t.string :image_url

      t.timestamps
    end
  end
end
