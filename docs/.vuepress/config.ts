import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { commentPlugin } from "vuepress-plugin-comment2";
import { pwaPlugin } from "vuepress-plugin-pwa2";
import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: 'zh-CN',
  title: '全栈道 • 笔记',
  description: '全栈道 • 笔记',
  // HTML 目录
  dest: "./dist",
  // 如果你正在使用 PWA 插件，我们推荐在你的 VuePress 配置文件中设置 
  shouldPrefetch: false,

  head: [
    // meta
    ["meta", { name: "robots", content: "all" }],
    ["meta", { name: "author", content: "全栈道" }],
    [
      "meta",
      {
        "http-equiv": "Cache-Control",
        content: "no-cache, no-store, must-revalidate",
      },
    ],
    ["meta", { "http-equiv": "Pragma", content: "no-cache" }],
    ["meta", { "http-equiv": "Expires", content: "0" }],
    [
      "meta",
      {
        name: "keywords",
        content:
          "Java, Java基础, 并发编程, JVM, 虚拟机, 数据库, MySQL, Spring, Redis, MyBatis, SpringBoot, IDEA, 求职面试, 面渣逆袭, 学习路线",
      },
    ],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "script",{},
      `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?5230ac143650bf5eb3c14f3fb9b1d3ec";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();
      `
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_3180624_7cy10l7jqqh.css",
      },
    ],
  ],

  plugins: [
    // Progressive Web app，即渐进式网络应用程序，
    // 允许网站通过支持该特性的浏览器将网站作为 App 安装在对应平台上。
    pwaPlugin({
      // favicon.ico一般用于作为缩略的网站标志,它显示位于浏览器的地址栏或者在标签上,用于显示网站的logo,
      favicon: "/images/logo.png",
      // 主题色
      themeColor: "#096dd9",
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      },
    }),
    // 留言
    commentPlugin({
      provider: "Giscus",
      repo :"itwanger/tobebetterjavaer-giscus",
      repoId:"R_kgDOHBJssg",
      category:"Announcements",
      categoryId:"DIC_kwDOHBJsss4COJOx",
    }),
    // 只能搜索
    docsearchPlugin({
      appId: "O566AMFNJH",
      apiKey: "d9aebea8bd1a4f1e01201464bbab255f",
      indexName: "tobebetterjavaer",
      locales: {
        "/": {
          placeholder: "搜索文档",
          translations: {
            button: {
              buttonText: "搜索文档",
              buttonAriaLabel: "搜索文档",
            },
            modal: {
              searchBox: {
                resetButtonTitle: "清除查询条件",
                resetButtonAriaLabel: "清除查询条件",
                cancelButtonText: "取消",
                cancelButtonAriaLabel: "取消",
              },
              startScreen: {
                recentSearchesTitle: "搜索历史",
                noRecentSearchesText: "没有搜索历史",
                saveRecentSearchButtonTitle: "保存至搜索历史",
                removeRecentSearchButtonTitle: "从搜索历史中移除",
                favoriteSearchesTitle: "收藏",
                removeFavoriteSearchButtonTitle: "从收藏中移除",
              },
              errorScreen: {
                titleText: "无法获取结果",
                helpText: "你可能需要检查你的网络连接",
              },
              footer: {
                selectText: "选择",
                navigateText: "切换",
                closeText: "关闭",
                searchByText: "搜索提供者",
              },
              noResultsScreen: {
                noResultsText: "无法找到相关结果",
                suggestedQueryText: "你可以尝试查询",
              },
            },
          },
        },
      },
    }),
  ],

  theme,
  // theme: defaultTheme({
  //   logo: '/images/logo.png',
  //   navbar: [
  //     {
  //       text: '概述',
  //       link: '/',
  //     },
  //       {
  //         text: '前端基础',
  //         children: [
  //           { text: 'HTML', link: '/font_end_basic/html/' },
  //           { text: 'CSS', link: '/font_end_basic/css/' },
  //           // { text: 'JavaScript', link: '/font_end_basic/javascript/' },
  //         ],
  //       },
  //       {
  //         text: '框架与库',
  //         children: [
  //           { text: 'vue', link: '/vue/' }
  //         ],
  //       }
  //   ],

  //   // 侧边栏数组
  //   // 所有页面会使用相同的侧边栏
  //   sidebar: {
  //     '/font_end_basic/html/': [
  //       { text: 'HTML', link: '/font_end_basic/html/README.md'},
  //       // { text: '第1节 浏览器简介', link: '/font_end_basic/html/第1节浏览器简介.md' },
  //       { text: '第一节 HTML简介', link: '/font_end_basic/html/第1节浏览器简介.md' },
  //       { text: '第2节 浏览器的工作原理简介', link: '/font_end_basic/html/第2节浏览器的工作原理简介.md' },
  //       { text: '第3节 HTML简介', link: '/font_end_basic/html/第3节HTML简介.md' },
  //       { text: '第4节 HTML标签分类及实践', link: '/font_end_basic/html/第4节HTML标签分类及实践.md' },
  //       { text: '第5节 HTML编码规范', link: '/font_end_basic/html/第5节HTML编码规范.md' },
  //       { text: '第6节 HTML技巧', link: '/font_end_basic/html/第6节HTML技巧.md' },
  //     ],
  //     '/font_end_basic/css/': [
  //       { text: 'CSS', link: '/font_end_basic/css/README.md'},
  //       { text: '第1节 CSS简介', link: '/font_end_basic/css/第1节CSS简介.md'},
  //       { text: '第2节 CSS选择器', link: '/font_end_basic/css/第2节CSS选择器.md'},
  //       { text: '第3节 CSS盒子模型', link: '/font_end_basic/css/第3节CSS盒子模型.md'},
  //       { text: '第4节 CSS浮动与清除', link: '/font_end_basic/css/第4节CSS浮动与清除.md'},
  //       { text: '第5节 CSS定位', link: '/font_end_basic/css/第5节CSS定位.md'},
  //       { text: '第6节 CSS背景', link: '/font_end_basic/css/第6节CSS背景.md'},
  //       { text: '第7节 CSS字体和文本', link: '/font_end_basic/css/第7节CSS字体和文本.md'},
  //       { text: '第8节 CSS布局', link: '/font_end_basic/css/第8节CSS布局.md'},
  //       { text: '第9节 水平垂直居中', link: '/font_end_basic/css/第9节水平垂直居中.md'},
  //       { text: '第10节 CSS3', link: '/font_end_basic/css/第10节CSS3.md'},
  //       { text: 'CSS工具', link: '/font_end_basic/css/CSS工具.md'},
  //     ],
  //     // '/font_end_basic/javascript/': [
  //     //   { text: 'HTML', link: '/font_end_basic/html/README.md'},
  //     //   { text: '第一节 HTML简介', link: '/font_end_basic/html/1.浏览器简介.md' }
  //     // ],
  //     // ],
  //     // '/font_end_basic/': [
  //     //   {
  //     //     text: 'HTML',
  //     //     collapsible: true,
  //     //     children: [
  //     //       { text: '第一节 HTML简介', link: '/font_end_basic/html/README.md' }
  //     //     ],
  //     //   },
  //     //   {
  //     //     text: 'CSS',
  //     //     collapsible: true,
  //     //     children: [
  //     //       { text: '第一节 HTML简介', link: '/font_end_basic/html/README.md' }
  //     //     ],
  //     //   },
  //     //   {
  //     //     text: 'Javascript',
  //     //     collapsible: true,
  //     //     children: [
  //     //       { text: '第一节 HTML简介', link: '/font_end_basic/html/README.md' }
  //     //     ],
  //     //   }
  //     // ],
  //     '/vue/': [
  //       {
  //         text: 'Vue学习',
  //         collapsible: true,
  //         children: ['/vue/', '/vue/'],
  //       }
  //     ],
  //   },
    // sidebar: [
      
      // // SidebarItem
      // {
      //   text: 'Foo',
      //   link: '/html/',
      //   // children: [
      //   //   // SidebarItem
      //   //   {
      //   //     text: 'github',
      //   //     link: 'https://github.com',
      //   //     children: [],
      //   //   },
      //   //   // 字符串 - 页面文件路径
      //   //   '/html/',
      //   // ],
      // },
      // // 字符串 - 页面文件路径
      // {
      //   text: 'Foo11',
      //   link: '/vue/',
      // }
    // ],
  // }),
})