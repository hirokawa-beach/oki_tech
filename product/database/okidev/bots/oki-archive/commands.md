# Oki Archive Bot コマンド解説

source: bot-spec
updated: 2026-04-26
category: bot

## アーカイブ関連

### /archive tile

アーカイブをタイル座標指定で取得します。

```text
/archive tile x: y: [time:]
```

### /archive url

アーカイブを URL 指定で取得します。

```text
/archive url url: [time:]
```

`/archive tile` と `/archive url` で呼び出せる範囲は、タイル X 座標 `1791` から `1802`、タイル Y 座標 `901` から `910` です。

### /archive munotori

無ノ鳥島のアーカイブを取得します。

```text
/archive munotori url: [time:]
```

### /diff tile

差分画像をタイル座標指定で生成します。

```text
/diff tile x: y: time1:
```

### /diff url

差分画像を URL 指定で生成します。

```text
/diff url url: time1: time2:
```

### /diff map

洋上地図の全体差分画像を生成します。

```text
/diff map time1: time2:
```

### 変数

- `time`: 時間指定。何も指定しない場合は3時間前。X時間前は `Xh`、X日前は `Xd`
- `time1`: 比較元の時間
- `time2`: 比較先の時間

## 地域情報取得

### /region name

指定した地域（region）の着色 px 数などを計算します。

```text
/region name name:
```

### 変数

- `name`: 地域名。wplace では Pixel 座標の横に表示されます

地域名は、必ず頭文字を大文字にし、空白を入れず、番号には `#` を付けてください。

例:

```text
Uruma#117
```

## ネタ枠

### /quote

鯖での名言がランダムに送信されます。

```text
/quote
```

### /newyear

鯖での名言がおみくじ付きでランダムに送信されます。

```text
/newyear
```

お正月向けのコマンドです。

## その他

### /ping

Bot が生きているかどうかを確認できます。

```text
/ping
```

通信遅延時間を計測して表示します。
