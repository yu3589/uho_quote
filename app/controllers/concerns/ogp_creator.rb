class OgpCreator
  require "mini_magick"
  BASE_IMAGE_DIR = "./app/assets/images"
  GRAVITY = "center"
  TEXT_POSITION = "0,0"
  FONT = "./app/assets/fonts/Zen_Antique/ZenAntique-Regular.ttf"
  FONT_SIZE = 65
  INDENTION_COUNT = 16
  ROW_LIMIT = 8

  def self.build(text, category)
    image_filename = "#{category}_ogp.png"
    base_image_path = "#{BASE_IMAGE_DIR}/#{image_filename}"
    image = MiniMagick::Image.open(base_image_path)

    text = prepare_text(text)
    image.combine_options do |config|
      config.font FONT
      config.fill "#504949"
      config.gravity GRAVITY
      config.pointsize FONT_SIZE
      config.draw "text #{TEXT_POSITION} '#{text}'"
    end

    image
  end

  private
  def self.prepare_text(text)
    text.to_s.scan(/.{1,#{INDENTION_COUNT}}/)[0...ROW_LIMIT].join("\n")
  end
end
