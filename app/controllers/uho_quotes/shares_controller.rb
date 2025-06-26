# app/controllers/uho_quotes/shares_controller.rb
module UhoQuotes
  class SharesController < ApplicationController
    def create
      # JavaScript(Stimulus)からそれぞれ受け取る
      category = params[:category]
      quote = params[:quote]

      ogp_id = SecureRandom.uuid
      ogp_path = Rails.root.join("public", "ogps", "#{ogp_id}.png")
      begin
        # OGP画像の生成と保存
        OgpCreator.build(quote, category).write(ogp_path)
        # キャッシュ保存
        Rails.cache.write(ogp_id, { quote: quote, category: category }, expires_in: 3.days)
        # Stimulusコントローラでシェア処理を動かすために、Rails側から必要な情報を受け渡す
        render json: {
            url: category_uho_quote_url(category: category, uuid: ogp_id)
        }
      rescue => e
        Rails.logger.error("OGP生成失敗: #{e.message}")
        render json: { error: "シェア用リンクの生成に失敗しました。" }, status: :internal_server_error
      end
    end
  end
end
