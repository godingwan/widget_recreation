require 'spec_helper'

describe Option do
  it 'must not be saved if nothing is selected' do
    entry = Option.new

    expect{entry.save}.to raise_error
  end

  it 'returns the poll count of the item' do
    Option.create(choice: "poll")

    expect(Option.number_of("poll")).to eql(1)
    expect(Option.number_of("countdown")).to eql(nil)
  end

  it 'adds one to each item if all of the above is picked' do
    Option.create(choice: "all_of_the_above")

    expect(Option.number_of("poll")). to eql(1)
    expect(Option.number_of("slideshow")). to eql(1)
    expect(Option.number_of("countdown")). to eql(1)
    expect(Option.number_of("this_or_that")). to eql(1)
  end
end
