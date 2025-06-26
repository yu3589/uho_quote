import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="share"
// クラスの定義。viewでdata-コントローラー名="内容"と書いた要素に動作する
export default class extends Controller {
  // JS側で this.quoteValue の様にして扱えるようにする設定 
  static values = {
    quote: String,
    category: String,
    categoryLabel: String
  }
  // ボタンがクリックされたときのイベントハンドラ
  async shareOnTwitter() {
    // fetch()で /uho_quotes/share にPOSTリクエストを送る
    const response = await fetch("/uho_quotes/share", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // CSRF対策のセキュリティトークン
        "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]').content
      },
      // ウホ名言とカテゴリのキーをJSON形式で送信
      body: JSON.stringify({
        quote: this.quoteValue,
        category: this.categoryValue
      })
    });

    // サーバーのレスポンスが正常(ステータス200系)ならJSONをパース。
    if (response.ok) {
      const data = await response.json();
      const shareText = encodeURIComponent(`ウホ名言で「${this.categoryLabelValue}」をもらったよ！\n${data.url}\n#ウホ名言`);
      const url = `https://twitter.com/intent/tweet?text=${shareText}`;

      window.open(url, "_blank");
    } else {
      alert("シェアリンクの作成に失敗しました。");
    }
  }
}
