class CreateOptionsTable < ActiveRecord::Migration
  def change
    create_table :options do |t|
      t.string :choice, :null => false

      t.timestamp
    end
  end
end
