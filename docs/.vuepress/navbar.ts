import { navbar } from "vuepress-theme-hope";

export default navbar([
  { 
    text: "博客",
    icon: "bokeyuan",
    link: "../../README.md" 
  },
  { 
    text: "前端基础", 
    icon: "kaifa", 
    children: [
      { text: '图解HTML', icon: 'HTML', link: '/front-end-basics/html/' },
      { text: '图解CSS', icon: 'css', link: '/front-end-basics/css/' }
    ]
  },
  { 
    text: "前端进阶", 
    icon: "lujing", 
    link: "/zhishixingqiu/" 
  },
  {
    text: "前端高阶",
    icon: "gaojirenzheng",
    link: "/xuexiluxian/"
  },
  {
    text: "B站视频",
    icon: "bzhan", 
    link: "https://space.bilibili.com/285025688"
  },
]);
