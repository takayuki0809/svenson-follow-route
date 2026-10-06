// ===== フォロールート 設定ファイル =====
// このファイルだけを書き換えれば、保存先や地図の設定を変えられます。
window.APP_CONFIG = {
  // 1) チーム共有（Firebase）
  //    未設定（null）のときは「ローカルモード」：データはこのブラウザだけに保存されます。
  //    Firebase コンソール → プロジェクトの設定 → マイアプリ（ウェブ）に表示される値を貼り付けます。
  firebase: null,
  // 例：
  // firebase: {
  //   apiKey: "AIza...",
  //   authDomain: "your-project.firebaseapp.com",
  //   projectId: "your-project",
  //   appId: "1:000000000000:web:xxxxxxxx"
  // },

  // ログインを許可するメールのドメイン（Firebase 使用時）
  allowedDomain: "svenson.co.jp",

  // 編集者（ポイントのルール変更・初期データの読み込みができる人）のメールアドレス
  adminEmails: [
    // "your.name@svenson.co.jp"
  ],

  // 2) Google Maps JavaScript API キー（任意）
  //    空欄：Googleマップの埋め込みで「その日のルート」を道路経路つきで表示
  //    設定：全店舗を優先度の色でピン表示し、ルートを番号つきで表示（ピンを押すと店舗の詳細）
  googleMapsApiKey: "",

  // 3) 訪問準備・会話練習のAI（ChatGPT / OpenAI API）
  //    proxyUrl が空：各自が画面でOpenAIのAPIキーを入力（そのブラウザだけに保存）
  //    proxyUrl を設定：社内の中継サーバー経由で呼ぶ（キーを配らずに済む）
  //    provider を "" にするとAI機能を非表示にします
  ai: {
    provider: "openai",
    model: "gpt-4o-mini",
    proxyUrl: ""
  },

  // 4) 初期データの場所（ローカル起動時だけ使います。GitHub には置かないでください）
  seedPath: "seed/"
};
