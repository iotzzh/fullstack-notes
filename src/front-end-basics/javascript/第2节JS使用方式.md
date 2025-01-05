---
title: JS使用方式
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
![](./assets/JavaScript使用方式.png)

JS是解释性语言，所以不需要搭建类似C#/Java之类的开发运行环境，因为他们是编译型语言。JS一般运行在浏览器中或者node环境中，这里都是JS引擎的功劳。

## node环境使用
推荐使用nvm管理node版本，nrm管理代理地址。
安装node：https://nodejs.org/en/
然后随便写一个JS文件，运行node命令运行即可：
![](./assets/node-run.png)

## HTML中使用
在html中使用方式有两种：

第一种，直接嵌入到html中进行使用

第二种，写到单独的文件中，在html中引用
![](./assets/html-use-js.png)
![](./assets/html-use-js-1.png)


## 扩展

### 延迟脚本（defer），异步脚本(async)
在了解defer和async之前，我们需要了解一下浏览器如何解释html的。一个html文档，浏览器是自上而下进行解析的。也就是从html开始一步一步到/html, 即使head中引用了多个外部js，也会将全部js加载完再向下解析。这就产生了一个问题，如果head中引入了大量外部js，这就会造成页面开始是空白的情况，直到js全部加载完之后，才会根据DOM进行界面显示。
所以可以将外部引用的js放置在body的尾部最好不过：

### defer
在html4.01为script添加了defer属性，脚本会延迟到整个页面都解析完毕后再运行，也就是虽然脚本在head中，但是也会延迟到浏览器遇到```</html>```之后再执行。

注意
在现实中，延迟脚本并不一定会按照顺序执行，也不一定会在DOMContentLoaded事件触发前执行，因此最好只包含一个延迟脚本。

### async
顾名思义，该属性的功能就是让浏览器异步加载js，而不是按照常规的顺序解析。

提示：延迟加载，并不影响界面的构造。而是立即下载，延迟执行。
最好使用外部文件来包含JS代码。
可维护性；可缓存，更加具有包容性。

```<noscript>```元素
用于验证浏览器是否支持JS，如果不支持，进行提示。
```<noscript>该浏览器不支持脚本</noscript>```