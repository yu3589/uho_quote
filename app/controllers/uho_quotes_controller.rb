class UhoQuotesController < ApplicationController
  require "yaml"
  before_action :set_uho_quotes
  before_action :set_category_title, only: [ :categories, :show ]

  def top
    clean_old_ogps if rand < 0.05 # 5% の確率で掃除（負荷対策）
  end

  def categories; end

  def show
    if params[:uuid].present?
      load_quote_from_cache(params[:uuid])
    else
      category = params[:category]
      generate_new_quote(category)
    end

    image_url = "#{request.base_url}/ogps/#{@ogp_id}.png"
    prepare_meta_tags(image_url)
  end

  private

  def load_quote_from_cache(uuid)
    cached_data = Rails.cache.read(uuid)
    unless cached_data
      redirect_to root_path
      return
    end

    @selected_uho_quote = cached_data[:quote]
    @category_key = cached_data[:category]
    @category = I18n.exists?("uho_quotes.#{@category_key}") ? I18n.t("uho_quotes.#{@category_key}") : t("uho_quotes.title")
    @ogp_id = uuid
  end

  def set_category_title
    @category_title = @uho_quotes["category_title"]&.sample
  end

  def generate_new_quote(category)
    @selected_uho_quote = params[:quote] || @uho_quotes[category]&.sample
    @category = I18n.t("uho_quotes.#{category}", default: t("uho_quotes.title"))
    @category_key = category
    @ogp_id = SecureRandom.uuid

    ogp_dir = Rails.root.join("public", "ogps")

    # mkdir_p でpublic/ogps フォルダの存在確認＋再帰作成
    FileUtils.mkdir_p(ogp_dir)
    ogp_path = ogp_dir.join("#{@ogp_id}.png")

    # 指定されたUUIDに対応する.pngファイルがあるか確認
    unless File.exist?(ogp_path)
      OgpCreator.build(@selected_uho_quote, category).write(ogp_path)
    end

    # UUIDと名言データをキャッシュに保存
    Rails.cache.write(@ogp_id, { quote: @selected_uho_quote, category: category }, expires_in: 1.days)
    @category_key = category
    @category = I18n.exists?("uho_quotes.#{@category_key}") ? I18n.t("uho_quotes.#{@category_key}") : t("uho_quotes.title")
  end

  def set_uho_quotes
    @uho_quotes = YAML.load_file(Rails.root.join("config", "uho_quotes.yml"))
  end

  def prepare_meta_tags(image_url)
  # このimage_urlにMiniMagickで設定したOGPの生成した合成画像を代入する
  set_meta_tags og: {
                  site_name: "ウホ名言",
                  title: "ウホ名言",
                  description: @selected_uho_quote,
                  type: "website",
                  url: request.original_url,
                  image: image_url,
                  locale: "ja-JP"
                 },
                  twitter: {
                  card: "summary_large_image",
                  image: image_url
                }
  end

  def clean_old_ogps
    ogp_dir = Rails.root.join("public", "ogps")
    return unless Dir.exist?(ogp_dir)

    Dir.glob("#{ogp_dir}/*.png").each do |file|
      if File.mtime(file) < 1.days.ago
        begin
          Rails.logger.info "削除: #{file}" # 削除処理をログに出力
          File.delete(file)
        rescue => e
          Rails.logger.warn "削除失敗: #{file}"
        end
      end
    end
  end
end
