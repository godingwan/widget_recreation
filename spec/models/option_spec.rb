require 'spec_helper'

describe Option do
  it 'must not be saved if nothing is selected' do
    entry = Option.new

    expect{entry.save}.to raise_error
  end
end
