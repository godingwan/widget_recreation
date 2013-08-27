class Option < ActiveRecord::Base
  # attr_accessible :choice

  # def self.number_of(name_of_choice)
  #   @choice_hash = hash_of_result
  #   all_of_the_above_counter
  #   return @choice_hash[name_of_choice]
  # end

  # def self.hash_of_result
  #   Option.select(:choice).group(:choice).count
  # end

  # def self.all_of_the_above_counter
  #   @choice_hash["all_of_the_above"] ||= 0
  #   for counter in 0...@choice_hash["all_of_the_above"]
  #     ["poll", "slideshow", "countdown", "this_or_that"].each do |choice|
  #       @choice_hash[choice] ||= 0
  #       @choice_hash[choice] += 1
  #     end
  #   end
  #   @choice_hash
  # end
end
