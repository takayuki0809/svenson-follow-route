# SVENSON フォロールート（GitHub Pages版）

外部営業の出荷実績・ラウンド状況から、フォローすべき店舗・ルート・次の一手を表示するダッシュボードです。
ルート図は Google マップで表示します。

## このフォルダに入っているもの（GitHub に上げてよいもの）
| ファイル | 内容 |
|---|---|
| index.html | ダッシュボード本体 |
| config.js | 設定（Firebase・Googleマップのキーなど） |
| stations.json | 駅の位置（国土数値情報〈鉄道データ〉を加工。公開データ） |
| route-map.html | （任意）ルートだけを大きく表示するページ |
| firestore.rules | Firebase のセキュリティルール（コンソールに貼り付ける用） |

**販売データ・店舗データは GitHub に上げません。** 「初期データ（GitHubに上げない）」フォルダはこのフォルダの外にあります。

## 1. このPCで動かす（すぐ使える）
1. `営業支援ツール\start-local.bat` をダブルクリック
2. ブラウザで http://localhost:8765/ が開きます（初期データを自動で読み込みます）
3. 終了するときは黒いウィンドウを閉じます

この状態は「ローカルモード」：データ・対応記録はこのPCのブラウザだけに保存されます。

## 2. GitHub Pages で公開する
1. GitHub で新しいリポジトリ（Public）を作成
2. このフォルダの中身（index.html, config.js, stations.json, route-map.html, README.md）をアップロード
3. Settings → Pages → Deploy from a branch → main / (root) → Save
4. `https://<ユーザー名>.github.io/<リポジトリ名>/` で開けます

## 3. チームで共有する（Firebase）
1. https://console.firebase.google.com でプロジェクトを作成（無料プランで可）
2. 「Authentication」→ ログイン方法 → **Google** を有効化
   「設定」→「承認済みドメイン」に `<ユーザー名>.github.io` を追加
3. 「Firestore Database」を作成 → 「ルール」に `firestore.rules` の内容を貼り付け、編集者のメールを書き換えて公開
4. 「プロジェクトの設定」→「マイアプリ」→ ウェブアプリを追加 → 表示された `firebaseConfig` の値を `config.js` の `firebase:` に貼り付け
5. `config.js` の `adminEmails` に編集者のメールアドレスを入れる
6. GitHub の config.js を更新 → 編集者がログインし、「データ取込」→「初期データの読み込み」で
   「初期データ（GitHubに上げない）」フォルダの JSON をすべて選んで読み込む

※ Firebase の設定値（apiKey など）は公開されても問題ない値です。データはセキュリティルールで守られます。

## 4. Googleマップの表示を強化する（任意）
`config.js` の `googleMapsApiKey` に Google Maps JavaScript API のキーを入れると、
全店舗を優先度の色でピン表示し、ピンを押すと店舗の詳細が開くようになります。
キーは Google Cloud で「HTTPリファラー」を `https://<ユーザー名>.github.io/*` と `http://localhost:8765/*` に制限してください。

## 5. 訪問準備・会話練習（ChatGPT）
店舗の詳細 →「ChatGPTで訪問準備・会話練習」で、準備メモ・店舗側との会話練習・採点ができます。
- 初回に各自の OpenAI APIキー（https://platform.openai.com/api-keys で発行）を画面に入力します。キーはそのブラウザだけに保存されます。
- 利用料金は OpenAI の従量課金（キーの持ち主に請求）です。モデルは `config.js` の `ai.model` で変更できます。
- キーを配らずに会社で一括管理したい場合は、`営業支援ツール\relay-worker`（中継サーバー）を Cloudflare Workers に公開し、その URL を `ai.proxyUrl` に設定します（手順は relay-worker\README.md）。
- 店舗名・売上などの店舗データが OpenAI に送信されます。社内の利用ルールを確認してください。

## 出典
- 地図：Google マップ
- 駅・路線：「国土数値情報（鉄道データ）」（国土交通省）を加工して作成
- 店舗の位置：国土地理院「アドレス検索」で住所から推定
