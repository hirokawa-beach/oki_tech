# RC Tools 完成予定日計算

source: github-site
updated: 2026-04-27
category: site
repository: https://github.com/ultimate-1113/wplace-tools
public_url: https://rc-tools.wplaceoki.com/finishPaint

## 概要

完成予定日計算は、2つの日付と残りペイント数から、完成予定日や進捗速度を推定するツールです。

ページURL:

https://rc-tools.wplaceoki.com/finishPaint

## 入力項目

- 日付1
- 残りペイント数1
- 日付2
- 残りペイント数2

日付は `datetime-local` 形式の入力欄から指定します。

残りペイント数は、カンマあり・なしの数値を入力できます。

## 出力内容

結果として、次の情報が表示されます。

- 完成予定日
- 1分当たりに進むペイント数
- 人数換算

## 計算の考え方

2つの観測点を時刻順に並べ、残りペイント数の差から進捗速度を計算します。

後の観測時点で残りペイント数が増えている場合は、入力確認のエラーになります。

進捗が0の場合も完成予定日は計算できません。

人数換算では、1人が1分あたりに塗れる量をもとに人数を推定します。
