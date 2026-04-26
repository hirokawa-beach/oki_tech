# RC Tools 道路地図URL変換ツール

source: github-site
updated: 2026-04-27
category: site
repository: https://github.com/ultimate-1113/wplace-tools
public_url: https://rc-tools.wplaceoki.com/ConvertUrl

## 概要

道路地図URL変換ツールは、wplace 道路地図の URL と現地 wplace URL を相互に変換するツールです。

公開URL:

https://rc-tools.wplaceoki.com/ConvertUrl

## 変換モード

変換モードは2種類あります。

- 地図 → 現地
- 現地 → 地図

地図から現地へ変換する場合は、道路地図上の URL を入力して、対応する現地の wplace URL を出力します。

現地から地図へ変換する場合は、現地の wplace URL を入力して、対応する道路地図 URL を出力します。

## 入力項目

- 変換モード
- ズーム値
- wplace URL

URL は、次のような `lat` と `lng` を含む形式を使います。

```text
https://wplace.live/?lat=...&lng=...&zoom=...
```

## 出力内容

変換後の座標と、wplace で開けるリンクが表示されます。

現地から道路地図へ変換する場合、場所によっては道路地図の候補が2つ表示されることがあります。

## 注意点

地図から現地へ変換する場合、入力URLが道路地図の対象範囲外だと変換できません。

変換結果の詳細には、内部的な world 座標や生成URLが表示されます。
