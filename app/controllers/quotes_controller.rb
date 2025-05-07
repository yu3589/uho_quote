class QuotesController < ApplicationController
  require 'yaml'
  before_action :set_quote

  def category;
  end

  def show
    category = params[:category]
    @category = params[:category]
    @quote = @quotes[category]&.sample
  end

  private

  def set_quote
    @quotes = YAML.load_file(Rails.root.join('config', "uho_quote.yml"))
  end
end
