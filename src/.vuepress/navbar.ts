import { navbar } from "vuepress-theme-hope";

export default navbar([
  { 
    text: "博客",
    icon: "icon-bokeyuan",
    link: "/" 
  },
  { 
    text: "前端基础", 
    icon: "icon-kaifa", 
    children: [
      { text: '图解HTML', icon: 'icon-HTML', link: '/front-end-basics/html/' },
      { text: '图解CSS', icon: 'icon-css', link: '/front-end-basics/css/' }
    ]
  },
  // { 
  //   text: "前端进阶", 
  //   icon: "icon-lujing", 
  //   link: "/zhishixingqiu/" 
  // },
  // {
  //   text: "前端高阶",
  //   icon: "gaojirenzheng",
  //   link: "/xuexiluxian/"
  // },
  {
    text: "B站视频",
    icon: "bzhan", 
    link: "https://space.bilibili.com/285025688"
  },
  // "/",
  // "/demo/",
  // {
  //   text: "博文",
  //   icon: "pen-to-square",
  //   prefix: "/posts/",
  //   children: [
  //     {
  //       text: "苹果",
  //       icon: "pen-to-square",
  //       prefix: "apple/",
  //       children: [
  //         { text: "苹果1", icon: "pen-to-square", link: "1" },
  //         { text: "苹果2", icon: "pen-to-square", link: "2" },
  //         "3",
  //         "4",
  //       ],
  //     },
  //     {
  //       text: "香蕉",
  //       icon: "pen-to-square",
  //       prefix: "banana/",
  //       children: [
  //         {
  //           text: "香蕉 1",
  //           icon: "pen-to-square",
  //           link: "1",
  //         },
  //         {
  //           text: "香蕉 2",
  //           icon: "pen-to-square",
  //           link: "2",
  //         },
  //         "3",
  //         "4",
  //       ],
  //     },
  //     { text: "樱桃", icon: "pen-to-square", link: "cherry" },
  //     { text: "火龙果", icon: "pen-to-square", link: "dragonfruit" },
  //     "tomato",
  //     "strawberry",
  //   ],
  // },
  // {
  //   text: "V2 文档",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/zh/",
  // },
]);
