class VotingsController < ApplicationController
  def index
    @option = Option.new
  end
end
