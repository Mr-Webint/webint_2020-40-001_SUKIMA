# WordPress Project Template (Docker Based)

WordPressによるWebサイト制作のテンプレートです。実際のプロジェクトではこのリポジトリをクローンするようにしてください。

Webサイトのコンテンツ（JavaScriptファイルやCSSファイルなど）は ./wordpress/files/配下に配置してください。

## 開発セットアップ

1. ``% npm install``で依存するnpmモジュールをインストールしてください
1. JavaScriptとCSSはMinifyしてください（参照：[JavaScript Minifying](./_creating_hints/minifying_javascript.md)、[SCSS Compiling](./_creating_hints/compiling_scss.md)）
1. httpはhttpsへリダイレクトするように、wwwつきリクエストはwwwなしリクエストに正規化してください（参照：）
1. wp-adminで管理画面に到達できないように（参照：http://tanweb.net/2019/01/12/25093/）
1. ``% docker-compose up -d --build``でDocker ComposeによるWordPress+MySQLコンテナが立ち上がります。