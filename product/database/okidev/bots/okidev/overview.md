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

## Gemma4 コマンド詳細

この文書は、沖ノ鳥島開発botで使える `/gemma4` コマンドの説明です。

### Gemma4 コマンドを追加しました

#### 今回実装した機能

```text
/gemma4 translate text:
```

入力した文章を日本語に翻訳できます。

```text
/gemma4 translate message_url:
```

指定した Discord メッセージ URL の本文を取得して、日本語に翻訳できます。

```text
/gemma4 summarize text:
```

入力した文章を要約できます。

```text
/gemma4 summarize message_url:
```

指定した Discord メッセージ URL の本文を取得して、要約できます。

また、以下のサブコマンドも追加しました。

```text
/gemma4 ask text:
```

Gemma4 に質問できます。

```text
/gemma4 code text:
```

コードやプログラミング関連の質問ができます。

```text
/gemma4 chat text:
```

Gemma4 と自由に会話できます。

### サーバー知識検索機能について

`/gemma4 ask` と `/gemma4 chat` では、登録済みのサーバー資料や Wiki 本文から関連しそうな情報を検索し、その内容を参考にして回答できるようにする予定です。

この仕組みにより、次のような内容に答えやすくなります。

- 沖ノ鳥島開発 Discord サーバーのルールや案内
- wplace 上での沖ノ鳥島開発に関する情報
- Wiki に書かれている道路、鉄道、地名、施設、歴史などの情報
- 参加方法、開発方針、よくある質問
- `.wplace`、overlay、top_left_url、bottom_right_url などの関連用語

ただし、検索対象になるのは登録済みの資料だけです。未登録の情報、古い資料にしかない情報、リアルタイムのサーバー状況、最新ニュースなどは正確に答えられない場合があります。

回答に `[1]` のような番号が付く場合は、検索された資料を根拠として参照していることを表します。

### 知識提供のお願い

bot に覚えさせたい情報がある場合は、専用チャンネルに投稿してください。

投稿してほしいもの:

- Wiki ページの本文
- サーバールールや参加方法
- wplace 上の開発方針、座標、担当範囲
- 道路、鉄道、地名、施設などの一覧や説明
- よく聞かれる質問とその答え
- 古い情報と新しい情報の違いが分かるメモ

PC の方は、できれば Markdown 形式で整理してもらえると助かります。難しければ普通の文章でも大丈夫です。

Markdown 形式の例:

```md
# ページ名

source: URL
updated: YYYY-MM-DD

## 見出し

本文...
```

HTML をそのまま貼る場合は、広告、ヘッダー、サイドメニュー、ランキングなどが混ざることがあります。できれば Wiki 本文だけを抜き出してください。

### 補足

Gemma4 コマンドの返答は、デフォルトではチャンネルに公開されます。

自分だけに表示したい場合は、次のオプションを指定してください。

```text
private: true
```

`message_url:` を使用する場合、bot が閲覧できるチャンネルのメッセージのみ取得できます。

bot が見られないチャンネルや、本文のないメッセージは翻訳・要約できません。

回答が長い場合は、テキストファイルとして添付されます。

### 注意点

Gemma4 コマンドは、過去の会話内容を記憶しません。

必要な情報は、その都度 `text:` に含めてください。

Web 検索機能はありません。

最新情報、ニュース、現在の価格、リアルタイムの状況などについては、正確に回答できない場合があります。

AI の回答には誤りが含まれる場合があります。

重要な内容は、必ず別の情報源でも確認してください。

Cloudflare Workers AI の無料枠上限により、1日あたり 10,000 Neurons を超えると、その日は Gemma4 コマンドが利用できなくなる場合があります。

上限に達した場合は、翌日以降に再度お試しください。

追加または変更してほしい機能があれば、次のチャンネルで提案してください。

```text
https://discord.com/channels/1405845560413651026/1412350651962232915
```

提案時は、できれば <@715828829028876309> にメンションしてください。

bot でできる範囲で対応できる場合は対応します。

## Okidev Overlay Forge 詳細

Okidev Overlay Forge は、沖ノ鳥島開発botで使える、Discord 上で画像から `.wplace` オーバーレイファイルを生成する bot 機能です。

沖ノ鳥島開発botは、主に次のコマンドを提供します。

- `/make overlay`
- `/gemma4`

この文書では、ユーザーが使う機能と注意点を説明します。

### /make overlay

`/make overlay` は、Discord に添付された画像と wplace URL をもとに `.wplace` オーバーレイファイルを生成します。

#### 引数

- `image`: 変換する画像ファイル
- `top_left_url`: オーバーレイ左上に置く位置の wplace URL
- `bottom_right_url`: オーバーレイ右下の wplace URL。省略可能

#### 配置方法

`top_left_url` のみ指定した場合:

- 添付画像の元サイズをそのまま使います。
- 画像は 1:1 のサイズで配置されます。

`bottom_right_url` も指定した場合:

- `top_left_url` と `bottom_right_url` の 2 点から配置範囲を決めます。
- 画像データ自体はそのままですが、wplace 上では指定範囲に合わせて伸縮配置されます。

#### 対応画像形式

- PNG
- JPEG
- GIF
- WebP

#### 生成されるファイル

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

### URL 指定の注意

`top_left_url` と `bottom_right_url` には、`lat` と `lng` を含む wplace URL を指定してください。

例:

```text
https://wplace.live/?lat=22.174953202200907&lng=137.6985055280273&zoom=13.111370260882184
```

`bottom_right_url` を使う場合は、`top_left_url` より右下の位置を指定してください。

右下 URL が左上 URL より左上側にある場合、正しく生成できません。

### /gemma4

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

### 表示範囲

Gemma4 系コマンドの返答は、デフォルトではチャンネルに公開されます。

自分だけに表示したい場合は、次のオプションを指定してください。

```text
private: true
```

### 長い回答

Gemma4 の回答が長い場合、Discord の文字数制限に収まるようにテキストファイルとして添付されることがあります。

### 注意点

Gemma4 コマンドは、過去の会話内容を記憶しません。

必要な情報は、その都度 `text` に含めてください。

Web 検索機能はありません。

最新情報、ニュース、現在の価格、リアルタイムの状況などについては、正確に回答できない場合があります。

AI の回答には誤りが含まれる場合があります。

重要な内容は、必ず別の情報源でも確認してください。
