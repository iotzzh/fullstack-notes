import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "全栈道",
  description: "技术与哲学的对话：在编程中探寻逻辑之美，解码技术背后的深层智慧。",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
