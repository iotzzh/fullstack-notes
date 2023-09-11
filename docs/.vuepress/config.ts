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
            { text: 'HTML', link: '/font_end_basic/HTML/' }
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
        { text: '第一节 HTML简介', link: '/font_end_basic/html/1.浏览器简介.md' }
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
      ],
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