---
title: JS HTML5简介
shortTitle: 
sticky: false
star: false
isOriginal: true
category:
  - 前端基础
tag:
  - CSS
description: 
head:
  - - meta
    - name: keywords
      content: 
---

HTML5是近几年非常热门的话题，它提供了很多使用功能，例如：
* 本地存储
* canvas作图
* WebSocket
* 多线程
* 获取地理位置
* 富文本编辑器
* 公式编辑器

## 本地存储
本地存储主要包含Cookie、Storage和IndexedDB数据库三种方式。
不同数据库存储上限：
Cookie: 4k
Storage: 5M（chrome），不同浏览器上限大小不同
IndexedDB: 无上限
![](https://upload-images.jianshu.io/upload_images/2789632-d048330472d30cdc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## canvas作图
canvas作图是通过canvas标签来完成的，但是该标签及其所对应的HTMLCanvasElement对象本身并没有太多的操作，它主要是通过getContext方法获取的环境对象进行操作的。context分为2D和3D两种，要使用哪种就将参数传入getContext来获取相应的context,但是，对于一个canvas来说，只可以作为2D或3D中的一种来使用，当第一次调用getContext方法时，其类型就确定下来了，之后不可以再使用不同的参数来获取另一种。

## WebSocket
WebSocket是一种新的与服务端通信的方式，它是一种长连接的通信方式，也就是说连接成功后若不主动断开，则会一直保持连接状态，而不像HTTP（s）协议那样会自动断开连接，使用WebSocket可以很容易实现服务端推送相关的业务。

## 多线程
JS中的多线程是使用Worker对象来实现的，是基于事件的模式进行处理的。这里需要注意线程之间传递的数据不是引用而是数据的副本，这样不同线程之间进行数据处理时就不会造成相互干扰，但是这并不表示就不存在线程同步的问题，线程同步问题还需要手动解决。

## HTML5获取位置信息
HTML5中获取位置信息是通过navigator的geolocation属性对象来操作的，可以获取一次也可以连续获取，在获取位置信息前需要征得用户的同意。获取成功后会返回Position对象，其中包含经度、维度、运动速度等信息；如果获取失败，则会返回PositionError对象，其中包含获取失败的原因。如果要将获取的信息显示到地图上，则可以使用已有的地图API来实现。

## 富文本编辑器
富文本编辑器可以直接通过contenteditable属性制作。虽然理论上可以使用任何标签来做编辑器，但是为了安全建议大家最好使用iframe，这样可以避免对页面内的其他内容造成影响。对样式的修改可以使用getSelection获取到选区，然后手工修改，也可以通过document的execCommand方法使用命令来修改。插入图片时三个不同的地址要区分清除，一个用于上传图片，一个用于在编辑器中显示图片，一个用于在文章中显示图片，后两个地址是同一个地址，如果在编辑器中可以正常显示图片而在文章中无法正常显示就要考虑这两个地址所处的环境。

## 公式编辑器
公式编辑器主要使用的是MathML标准。这是一个独立的、基于XML的标准，其核心是各种标签和属性。编辑公式就是编辑其所包含的各种标签。