class Option < ActiveRecord::Base
  attr_accessible :choice

  def self.number_of(name_of_choice)
    choice_hash = hash_of_result

    return choice_hash[name_of_choice]
  end

  def self.hash_of_result
    Option.select(:choice).group(:choice).count
  end
end
