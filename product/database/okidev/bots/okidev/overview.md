# 沖ノ鳥島開発botの使い方

source: server-document
updated: 2026-04-26

## 概要

沖ノ鳥島開発botは、沖ノ鳥島開発 Discord サーバーで使える補助botです。

主な機能は次の2系統です。

- `/make overlay`: 画像と wplace URL から `.wplace` オーバーレイファイルを作る
- `/gemma4`: 翻訳、要約、質問応答、コード相談、通常チャットを行う

`/make overlay` と `/gemma4` は、どちらも沖ノ鳥島開発botで使える機能です。

## /make overlay

`/make overlay` は、Discord に添付した画像から `.wplace` オーバーレイファイルを生成するコマンドです。

使う主な引数:

- `image`: 変換する画像ファイル
- `top_left_url`: オーバーレイ左上に置く位置の wplace URL
- `bottom_right_url`: オーバーレイ右下の wplace URL。省略可能

`top_left_url` のみ指定した場合は、画像の元サイズをそのまま使って 1:1 で配置します。

`bottom_right_url` も指定した場合は、左上と右下の2点から配置範囲を決め、wplace 上ではその範囲に合わせて画像を伸縮配置します。

対応画像形式:

- PNG
- JPEG
- GIF
- WebP

## /gemma4

`/gemma4` は、Gemma4 に文章処理や質問応答を依頼するコマンドです。

使えるサブコマンド:

- `/gemma4 translate text:` 入力した文章を日本語に翻訳します
- `/gemma4 translate message_url:` 指定した Discord メッセージ本文を取得して日本語に翻訳します
- `/gemma4 summarize text:` 入力した文章を要約します
- `/gemma4 summarize message_url:` 指定した Discord メッセージ本文を取得して要約します
- `/gemma4 ask text:` Gemma4 に質問できます
- `/gemma4 code text:` コードやプログラミング関連の質問ができます
- `/gemma4 chat text:` Gemma4 と自由に会話できます

`translate` と `summarize` では、`text` または `message_url` のどちらか一方だけを指定します。

## 表示範囲

Gemma4 コマンドの返答は、デフォルトではチャンネルに公開されます。

自分だけに表示したい場合は、次のオプションを指定してください。

```text
private: true
```

## サーバー知識検索

`/gemma4 ask` と `/gemma4 chat` では、登録済みのサーバー資料や Wiki 本文から関連情報を検索し、その内容を参考にして回答できる場合があります。

検索対象になるのは、あらかじめ登録された資料だけです。

未登録の情報、現在のサーバー状況、最新ニュース、リアルタイムの情報は正確に答えられない場合があります。

## 注意点

Gemma4 コマンドは、過去の会話内容を記憶しません。

必要な情報は、その都度 `text` に含めてください。

AI の回答には誤りが含まれる場合があります。

重要な内容は、必ず別の情報源でも確認してください。
