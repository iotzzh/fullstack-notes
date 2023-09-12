import { defineUserConfig } from 'vuepress';
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '全栈道 • 笔记',
  description: '这是我的第一个 VuePress 站点',
  theme: defaultTheme({
    logo: '/images/logo.png',
    navbar: [
      {
        text: '概述',
        link: '/',
      },
        {
          text: '前端基础',
          children: [
            { text: 'HTML', link: '/font_end_basic/html/' },
            { text: 'CSS', link: '/font_end_basic/css/' },
            // { text: 'JavaScript', link: '/font_end_basic/javascript/' },
          ],
        },
        {
          text: '框架与库',
          children: [
            { text: 'vue', link: '/vue/' }
          ],
        }
    ],

    // 侧边栏数组
    // 所有页面会使用相同的侧边栏
    sidebar: {
      '/font_end_basic/html/': [
        { text: 'HTML', link: '/font_end_basic/html/README.md'},
        // { text: '第1节 浏览器简介', link: '/font_end_basic/html/第1节浏览器简介.md' },
        { text: '第一节 HTML简介', link: '/font_end_basic/html/第1节浏览器简介.md' },
        { text: '第2节 浏览器的工作原理简介', link: '/font_end_basic/html/第2节浏览器的工作原理简介.md' },
        { text: '第3节 HTML简介', link: '/font_end_basic/html/第3节HTML简介.md' },
        { text: '第4节 HTML标签分类及实践', link: '/font_end_basic/html/第4节HTML标签分类及实践.md' },
        { text: '第5节 HTML编码规范', link: '/font_end_basic/html/第5节HTML编码规范.md' },
        { text: '第6节 HTML技巧', link: '/font_end_basic/html/第6节HTML技巧.md' },
      ],
      '/font_end_basic/css/': [
        { text: 'CSS', link: '/font_end_basic/css/README.md'},
        { text: '第1节 CSS简介', link: '/font_end_basic/css/第1节CSS简介.md'},
        { text: '第2节 CSS选择器', link: '/font_end_basic/css/第2节CSS选择器.md'},
        { text: '第3节 CSS盒子模型', link: '/font_end_basic/css/第3节CSS盒子模型.md'},
        { text: '第4节 CSS浮动与清除', link: '/font_end_basic/css/第4节CSS浮动与清除.md'},
        { text: '第5节 CSS定位', link: '/font_end_basic/css/第5节CSS定位.md'},
        { text: '第6节 CSS背景', link: '/font_end_basic/css/第6节CSS背景.md'},
        { text: '第7节 CSS字体和文本', link: '/font_end_basic/css/第7节CSS字体和文本.md'},
        { text: '第8节 CSS布局', link: '/font_end_basic/css/第8节CSS布局.md'},
        { text: '第9节 水平垂直居中', link: '/font_end_basic/css/第9节水平垂直居中.md'},
        { text: '第10节 CSS3', link: '/font_end_basic/css/第10节CSS3.md'},
        { text: 'CSS工具', link: '/font_end_basic/css/CSS工具.md'},
      ],
      // '/font_end_basic/javascript/': [
      //   { text: 'HTML', link: '/font_end_basic/html/README.md'},
      //   { text: '第一节 HTML简介', link: '/font_end_basic/html/1.浏览器简介.md' }
      // ],
      // ],
      // '/font_end_basic/': [
      //   {
      //     text: 'HTML',
      //     collapsible: true,
      //     children: [
      //       { text: '第一节 HTML简介', link: '/font_end_basic/html/README.md' }
      //     ],
      //   },
      //   {
      //     text: 'CSS',
      //     collapsible: true,
      //     children: [
      //       { text: '第一节 HTML简介', link: '/font_end_basic/html/README.md' }
      //     ],
      //   },
      //   {
      //     text: 'Javascript',
      //     collapsible: true,
      //     children: [
      //       { text: '第一节 HTML简介', link: '/font_end_basic/html/README.md' }
      //     ],
      //   }
      // ],
      '/vue/': [
        {
          text: 'Vue学习',
          collapsible: true,
          children: ['/vue/', '/vue/'],
        }
      ],
    },
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
  }),
})