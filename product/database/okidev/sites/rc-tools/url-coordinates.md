# RC Tools URL座標変換ツール

source: github-site
updated: 2026-04-27
category: site
repository: https://github.com/ultimate-1113/wplace-tools
public_url: https://rc-tools.wplaceoki.com/urlCoordinates

## 概要

URL座標変換ツールは、wplace URL から複数の座標形式を確認するためのツールです。

公開URL:

https://rc-tools.wplaceoki.com/urlCoordinates

## 入力項目

wplace URL を入力します。

URL は、次のような `lat` と `lng` を含む形式を使います。

```text
https://wplace.live/?lat=...&lng=...&zoom=...
```

## 出力内容

次の座標が表示されます。

- 世界座標
- チャンク座標
- タイル座標

チャンク座標は `mod4000`、タイル座標は `mod1000` として扱われます。

## 詳細表示

詳細欄では、入力URL、変換前の world 座標、入力URLに対応する各種座標情報を確認できます。

座標の確認や、他のツールで使う値の下調べに使えます。
