// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"

// 画面警告表示
document.addEventListener('turbo:load', () => {
  function checkHeight() {
    const warning = document.getElementById('screen-warning');
    if (!warning) return; // エラー防止

    // ユーザーの使用デバイスがモバイルを判定
    const isMobile = /iPhone|Android|Mobile|iPad/i.test(navigator.userAgent);
    // 横向き判定
    const isLandscape = window.innerWidth > window.innerHeight;

    if ( 
      (!isMobile && (window.innerHeight < 680 || window.innerWidth < 1030 )) ||
      (isMobile && isLandscape)
    ) {
      warning.classList.remove('hidden');
    } else {
      warning.classList.add('hidden');
    }
  }

  checkHeight(); // 初回チェック
  window.addEventListener('resize', checkHeight); // リサイズ時にもチェック
});
