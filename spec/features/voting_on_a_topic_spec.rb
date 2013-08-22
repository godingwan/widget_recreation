require 'spec_helper'

feature 'radio buttons can be selected', %q{
  As a user
  I want to be able to select a radio button
  So that I can vote on my favorite topic
} do

  context 'as a user' do
    scenario 'I must see all the voting options' do
      visit root_path

      expect(page).to have_content("Poll")
      expect(page).to have_content("Slideshow")
      expect(page).to have_content("Countdown")
      expect(page).to have_content("This or That?")
      expect(page).to have_content("All of the above")
    end
  end
end
