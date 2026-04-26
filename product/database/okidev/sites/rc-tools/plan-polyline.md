# RC Tools 折れ線プランナー

source: github-site
updated: 2026-04-27
category: site
repository: https://github.com/ultimate-1113/wplace-tools
public_url: https://rc-tools.wplaceoki.com/planPolyline

## 概要

折れ線プランナーは、wplace 上の始点URLと終点URLから、道路の折れ点と傾きを計算するツールです。

このツールは、道路公社ツールサイトで提供されています。

ページURL:

https://rc-tools.wplaceoki.com/planPolyline

## 入力項目

- 始点URL
- 終点URL
- 折る順序

始点URLと終点URLには、wplace の URL を入力します。

折る順序は、次の3種類から選べます。

- 自動（誤差が小さい方）
- 始点側の傾きを緩やかにする
- 始点側の傾きを急にする

## 出力内容

計算結果として、次の情報が表示されます。

- 始点のチャンク座標と座標
- 始点側の傾き
- 折れ点のチャンク座標と座標
- 終点側の傾き
- 終点のチャンク座標と座標

始点、折れ点、終点は、それぞれ wplace で開けるリンクとして出力されます。

## 詳細表示

詳細欄では、傾きごとの進行距離、始点・折れ点・終点の世界座標、チャンク座標、タイル座標、終点誤差を確認できます。

道路の折れ位置や傾斜を調整したいときに使います。
