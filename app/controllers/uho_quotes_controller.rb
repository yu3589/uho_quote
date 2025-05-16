class UhoQuotesController < ApplicationController
  require "yaml"
  before_action :set_uho_quotes

  def top; end

  def category; end

  def show
    category = params[:category]
    @category = I18n.t("uho_quotes.#{category}", default: t("uho_quotes.title"))
    @selected_uho_quote = @uho_quotes[category]&.sample
  end

  private

  def set_uho_quotes
    @uho_quotes = YAML.load_file(Rails.root.join("config", "uho_quotes.yml"))
  end
end
