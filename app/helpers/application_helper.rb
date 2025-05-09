module ApplicationHelper
  def default_meta_tags
    {
      site: "ウホ名言",
      title: "ウホ名言",
      reverse: true,
      charset: "utf-8",
      description: "ゴリラの名言が見れるアプリです。",
      canonical: request.original_url,
      og: {
        site_name: :site,
        title: :title,
        description: :description,
        type: "website",
        url: request.original_url,
        image: "https://uho-quote.onrender.com/assets/ogp3.png",
        locale: "ja-JP"
      },
        twitter: {
        card: "summary_large_image",
        image: "https://uho-quote.onrender.com/assets/ogp3.png"
      }
    }
  end
end
