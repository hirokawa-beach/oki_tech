# Okidev Overlay Forge

source: server-document
updated: 2026-04-26

## 概要

Okidev Overlay Forge は、沖ノ鳥島開発botで使える、Discord 上で画像から `.wplace` オーバーレイファイルを生成する bot 機能です。

沖ノ鳥島開発botは、主に次のコマンドを提供します。

- `/make overlay`
- `/gemma4`

この文書では、ユーザーが使う機能と注意点を説明します。

## /make overlay

`/make overlay` は、Discord に添付された画像と wplace URL をもとに `.wplace` オーバーレイファイルを生成します。

### 引数

- `image`: 変換する画像ファイル
- `top_left_url`: オーバーレイ左上に置く位置の wplace URL
- `bottom_right_url`: オーバーレイ右下の wplace URL。省略可能

### 配置方法

`top_left_url` のみ指定した場合:

- 添付画像の元サイズをそのまま使います。
- 画像は 1:1 のサイズで配置されます。

`bottom_right_url` も指定した場合:

- `top_left_url` と `bottom_right_url` の 2 点から配置範囲を決めます。
- 画像データ自体はそのままですが、wplace 上では指定範囲に合わせて伸縮配置されます。

### 対応画像形式

- PNG
- JPEG
- GIF
- WebP

### 生成されるファイル

生成されるファイルの拡張子は `.wplace` です。

ファイル名と内部 ID は、基本的に次の形式になります。

```text
mmdd-tileX-tileY
```

例:

```text
0426-123-456.wplace
```

`.wplace` 内では、`bounds` が wplace 上での配置位置と配置サイズを表します。

`image.width` と `image.height` は、埋め込まれている画像自体の寸法です。

主な固定値:

- `opacity`: `1`
- `colorMetric`: `"lab"`
- `dithering`: `false`
- `order`: `0`
- `locked`: `false`
- `hasPlaced`: `true`
- `visible`: `true`

## URL 指定の注意

`top_left_url` と `bottom_right_url` には、`lat` と `lng` を含む wplace URL を指定してください。

例:

```text
https://wplace.live/?lat=22.174953202200907&lng=137.6985055280273&zoom=13.111370260882184
```

`bottom_right_url` を使う場合は、`top_left_url` より右下の位置を指定してください。

右下 URL が左上 URL より左上側にある場合、正しく生成できません。

## /gemma4

Gemma4 への問い合わせは `/gemma4` コマンドで行います。

サブコマンド:

- `/gemma4 translate`: 翻訳
- `/gemma4 summarize`: 要約
- `/gemma4 ask`: 質問応答
- `/gemma4 code`: コード関連の相談
- `/gemma4 chat`: 通常チャット

`translate` と `summarize` は、`text` または `message_url` のどちらか一方だけを指定します。

`message_url` を使う場合、bot が閲覧できるチャンネルのメッセージのみ取得できます。

bot が見られないチャンネルや、本文のないメッセージは翻訳・要約できません。

## 表示範囲

Gemma4 系コマンドの返答は、デフォルトではチャンネルに公開されます。

自分だけに表示したい場合は、次のオプションを指定してください。

```text
private: true
```

## 長い回答

Gemma4 の回答が長い場合、Discord の文字数制限に収まるようにテキストファイルとして添付されることがあります。

## 注意点

Gemma4 コマンドは、過去の会話内容を記憶しません。

必要な情報は、その都度 `text` に含めてください。

Web 検索機能はありません。

最新情報、ニュース、現在の価格、リアルタイムの状況などについては、正確に回答できない場合があります。

AI の回答には誤りが含まれる場合があります。

重要な内容は、必ず別の情報源でも確認してください。
