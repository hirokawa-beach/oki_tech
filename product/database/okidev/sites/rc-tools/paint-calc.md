# RC Tools ペイント量計算ツール

source: github-site
updated: 2026-04-27
category: site
repository: https://github.com/ultimate-1113/wplace-tools
public_url: https://rc-tools.wplaceoki.com/paintCalc

## 概要

ペイント量計算ツールは、2地点の wplace URL から距離差分を計算し、道路敷設に必要なペイント量を見積もるツールです。

ページURL:

https://rc-tools.wplaceoki.com/paintCalc

## 入力項目

- 地点1 URL
- 地点2 URL
- 道路幅(px)
- 重ね幅

地点1 URL と地点2 URL には、wplace の URL を入力します。

道路幅は px 単位で指定します。

重ね幅は `0` または `1` を選択できます。

## 出力内容

結果として、次の情報が表示されます。

- XY差分（world px）
- 必要ペイント数(px)
- 2地点の map 座標

## 計算の考え方

2地点の world 座標差から、長い軸と短い軸を求めます。

必要ペイント数は、道路幅と重ね幅を使って算出されます。

日付変更線を跨ぐ可能性がある場合、短い方の距離を使うか確認する処理があります。

## 注意点

傾きが1を跨ぐ道路には使用できません。

ファイルやURLではなく、wplace の2地点をもとにペイント量を推定するツールです。
