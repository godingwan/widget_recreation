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
end
