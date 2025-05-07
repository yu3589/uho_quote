class QuotesController < ApplicationController
  require "yaml"
  before_action :set_quote

  def category; end

  CATEGORY_NAMES = {
    "uho_power" => "ウホパワー",
    "healing" => "ウホヒーリング",
    "love" => "ウホ愛",
    "yell" => "ウホエール"
  }

  def show
    category = params[:category]
    @category = params[:category]
    @category = CATEGORY_NAMES[category] || "名言"
    @quote = @quotes[category]&.sample
  end

  private

  def set_quote
    @quotes = YAML.load_file(Rails.root.join("config", "uho_quote.yml"))
  end
end
