import { defineUserConfig } from 'vuepress';
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',
  theme: defaultTheme({
    navbar: [
      {
        text: '概述',
        link: '/',
      },
        {
          text: '前端基础',
          children: [
            { text: 'html', link: '/html/' }
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
      '/html/': [
        '/html/', '/html/'
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