# OkiDev Bot

source: okidev
updated: 2026-08-05
category: bot

## 概要

**OkiDev Bot（沖ノ鳥島開発bot）**は、wplace 用オーバーレイの生成と AI による文章処理を Discord から利用できる Bot です。

画像と wplace URL から `.wplace` ファイルを生成する `/make overlay` と、資料検索、会話、コード相談、翻訳、要約を行う `/ai` を提供します。

## 主な機能

- 画像から `.wplace` オーバーレイファイルを生成する
- 登録されたサーバー資料を検索して質問に回答する
- 利用者ごとの履歴を使って AI と会話する
- 文章や Discord メッセージを翻訳または要約する
- 画像を含む質問やコード相談に回答する
- 保存された会話履歴を削除する

## オーバーレイの生成

`/make overlay` は、Discord に添付した画像と wplace URL から `.wplace` オーバーレイファイルを生成します。

コマンドの結果は実行した本人だけに表示されます。

```text
/make overlay image:<画像> top_left_url:<左上のwplace URL> [bottom_right_url:<右下のwplace URL>]
```

### 引数

- `image`：オーバーレイに使う画像
- `top_left_url`：画像の左上を配置する wplace URL
- `bottom_right_url`：画像の右下を配置する wplace URL

`bottom_right_url` を省略すると、元画像の寸法を保ったまま 1:1 で配置します。

`bottom_right_url` を指定すると、二つの URL から配置範囲を決め、その範囲に合わせて画像を伸縮表示します。

左上と右下の URL には、`lat` と `lng` を含む wplace URL を指定します。

右下には、左上より右かつ下にある位置を指定してください。

### 対応画像形式

- PNG
- JPEG
- GIF
- WebP

### 生成されるファイル

生成されるファイルの拡張子は `.wplace` です。

ファイル名と内部 ID には、日付とタイル座標を組み合わせた値が使われます。

```text
mmdd-tileX-tileY.wplace
```

## AI コマンド

`/ai` は、用途に応じて Workers AI、AI Search、保存済みの会話履歴を使います。

返答は初期状態ではチャンネルに公開されます。

本人だけに表示したい場合は、対応するコマンドで `private:true` を指定します。

回答が Discord の文字数制限を超える場合は、テキストファイルとして添付されます。

### /ai translate

本文、Discord メッセージ、または画像を翻訳します。

```text
/ai translate [text:<本文>] [message_url:<DiscordメッセージURL>] [target_language:<翻訳先言語>] [image:<画像>] [private:<表示設定>]
```

`text` と `message_url` は同時に指定できません。

画像だけを指定した翻訳にも対応しています。

翻訳先を省略した場合、日本語は英語へ、日本語以外は日本語へ翻訳します。

`message_url` を使う場合、Bot が閲覧できるチャンネルのメッセージだけを取得できます。

### /ai summarize

本文、Discord メッセージ、または画像を要約します。

```text
/ai summarize [text:<本文>] [message_url:<DiscordメッセージURL>] [image:<画像>] [private:<表示設定>]
```

`text` と `message_url` は同時に指定できません。

画像だけを指定した要約にも対応しています。

### /ai ask

登録済みのサーバー資料を検索し、その内容を参照して質問に回答します。

```text
/ai ask text:<質問> [image:<画像>] [private:<表示設定>]
```

資料検索では候補を取得したうえで、規約の種類、条項、資料元を考慮して回答に使う資料を選びます。

回答が資料を引用した場合は、本文の引用番号と参照元が表示されます。

関連資料が見つからなかった場合は、そのことを明示したうえで一般知識を使って回答します。

### /ai code

コードやプログラミングに関する質問へ回答します。

```text
/ai code text:<質問> [image:<画像>] [model:<default|gpt_oss|nemotron>] [private:<表示設定>]
```

モデルを省略した場合は `default` が使われます。

`gpt_oss` と `nemotron` はテキストだけを扱うため、画像を使う場合は `default` を指定します。

### /ai chat

利用者ごとに保存された履歴を使って会話します。

```text
/ai chat text:<本文> [image:<画像>] [rag:<資料検索>] [private:<表示設定>]
```

`rag:true` を指定した場合だけ、登録済みのサーバー資料を検索します。

公開応答の履歴と `private:true` の履歴は分けて保存されます。

保存されるのは短いメモと直近の会話です。

画像データ、検索で取得した資料本文、回答の参照元一覧は履歴へ保存されません。

### /ai reset

自分の `/ai chat` 履歴を削除します。

```text
/ai reset [scope:<all|public|private>]
```

`scope` を省略すると、公開応答と非公開応答の両方の履歴を削除します。

このコマンドの結果は常に本人だけに表示されます。

## AI へ渡せる画像

AI コマンドでは、PNG、JPEG、WebP の画像を一枚まで使用できます。

画像は `image` オプションで添付するか、本文に画像 URL を記載します。

添付画像と本文中の画像 URL を合わせて二枚以上指定することはできません。

## 資料検索の範囲

`/ai ask` と `rag:true` を指定した `/ai chat` は、あらかじめ AI Search に登録された資料だけを検索します。

未登録の情報、現在のサーバー状況、最新ニュースなどを取得する Web 検索機能はありません。

資料の内容が古い場合や質問に必要な資料が登録されていない場合、回答が現在の状況と一致しない可能性があります。

## 利用上の注意

AI の回答には誤りが含まれる場合があります。

規約、権限、作業座標などの判断に使う場合は、回答に示された参照元や原資料も確認してください。

`message_url` で取得できるのは Bot が閲覧できるメッセージの本文です。

Bot が閲覧できないチャンネル、本文のないメッセージ、削除されたメッセージは翻訳または要約できません。
