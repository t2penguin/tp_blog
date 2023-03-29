---
title: '複数のコンピュータでROSを共有する設定方法'
excerpt: '自分のパソコンでROSを使うのに慣れてきたけど，複数のコンピュータでROSを使う方法がわからない．なんでだろうと困りますよね．僕も困りました．頑張った結果，なんとか動作させるようにできたので，わかったことを書き残します．' 
coverImage: '/assets/blog/preview/cover.jpg'
date: '2023-03-05T05:35:07.322Z'
author:
  name: タートルペンギン
  # picture: '/assets/blog/authors/pensan.png'
  picture: '/assets/blog/authors/tato.png'
ogImage:
  url: '/assets/blog/preview/cover.jpg'
---

## はじめに

自分のパソコンでROSを使うのに慣れてきたけど，複数のコンピュータでROSを使う方法がわからない．なんでだろうと困りますよね．僕も困りました．頑張った結果，なんとか動作させるようにできたので，わかったことを書き残します．

:::message
Robot operating system（ROS）に触れたことがある前提です．
:::

## IPアドレスの確認

まず初めに，2つ目のコンピュータ（自分のパソコンでない方）のIPアドレスを知る必要があります．IPアドレスを確認する方法は様々ですが，僕は次の方法で確認しました．

2つ目のコンピュータのターミナルで次のコマンドを実行します．

```bash:ターミナル
ip addr
```

## 環境変数（ROS_IPとROS_MASTER_URI）の設定

複数のコンピュータでROSを共有する際は，1つのROSマスターを複数のコンピュータで共有する必要があそうでした．そこで，1つ目のコンピュータ（自分のパソコン）と2つ目のコンピュータ（この記事ではJetson）のそれぞれで，環境変数を設定していきます．

設定する環境変数は，ROS_IPとROS_MASTER_URIです．設定方法は様々ありますが，僕は次のように設定しました．この場合は，192.168.xxx.yyyがマスターになります．

それぞれのコンピュータでターミナルを開き，.bashrcや.zshrcなどの設定ファイルの末尾に次の変数を書き込みました．

```bash:ターミナル1で開いた.bashrc
export ROS_IP=192.168.xxx.yyy
```
```bash:ターミナル2で開いた.bashrc
export ROS_MASTER_URI=http://192.168.xxx.yyy:11311/
export ROS_IP=192.168.xxx.zzz
```

## ホスト名の設定

なぜなのか，理由はわからなかったのですが，ROSではIPアドレスではなくホスト名が使われていました．そこで，ホスト名を登録しておきます．

僕は，次のようにホスト名を登録しました．まずはじめに，/etc/hostsファイルを開きます．次に，hostsに以下の内容を書き込みます．

```bash:ターミナル1
sudo vim /etc/hosts

# hostsに追加する内容
192.168.xxx.yyy a-san
192.168.xxx.zzz b-san
```
```bash:ターミナル2
sudo vim /etc/hosts

# hostsに追加する内容
192.168.xxx.yyy a-san
192.168.xxx.zzz b-san
```

以上で複数のコンピュータでROSを使うことができました！使う際には，192.168.xxx.yyyのコンピュータ（ROSマスターを設定した方）でROSコアを起動します．

それぞれのコンピュータで，トピックが確認できれば成功です．トピックは次のように確認しました．

```bash:ターミナル1
rostopic list
rostopic echo xxx-topic
```
```bash:ターミナル2
rostopic list
rostopic echo xxx-topic
```

これらのコマンドで同じ内容が表示されていれば問題ないと思います．

## おわりに

この記事では，複数のコンピュータでROSを共有する設定を行いました．ネットワークの知識が多少必要なので，僕にとっては大変でした笑．今後は，ROSプログラミングを頑張っていきたいです．では！