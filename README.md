# study-node-mailer

Next.js にて nodemailer を使用してメールを送る方法をまとめた

## 手順 (Gmail で送信)

### アプリ パスワード設定を行う

- Google アカウント
- `セキュリティ`
- `2段階認証プロセス`
- `アプリ パスワード`

### Next.js アプリケーション側の設定

ソースコード通り

## VIEW

### INPUT 画面

※送信先は送信後にマスク入力
![input](https://github.com/ayakaki/study-node-mailer/assets/65984887/e5f4c2d6-6edb-4adc-9f6e-991a2e502685)

### メールタイトル

![title](https://github.com/ayakaki/study-node-mailer/assets/65984887/ca8bb38c-2b66-4876-8a93-29d5d73690b6)

### メール内容

![content](https://github.com/ayakaki/study-node-mailer/assets/65984887/07314670-7bde-48c9-8cb3-b6e688e40b9f)

## 特記事項

- nodemailer はクライアントサイドコンポーネントでは使用できない
