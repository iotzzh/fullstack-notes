import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/front-end-basics/html/": [
    { text: '首页', collapsible: true, link: '/front-end-basics/html/README.md'},
    { text: '第1节 浏览器简介', collapsible: false, link: '/front-end-basics/html/第1节浏览器简介.md'},
    { text: '第2节 浏览器的工作原理简介', collapsible: true, link: '/front-end-basics/html/第2节浏览器的工作原理简介.md'},
    { text: '第3节 HTML简介', collapsible: true, link: '/front-end-basics/html/第3节HTML简介.md'},
    { text: '第4节 HTML标签分类及实践', collapsible: true, link: '/front-end-basics/html/第4节HTML标签分类及实践.md'},
    { text: '第5节 HTML编码规范', collapsible: true, link: '/front-end-basics/html/第5节HTML编码规范.md'},
    { text: '第6节 HTML技巧', collapsible: true, link: '/front-end-basics/html/第6节HTML技巧.md'},
  ],
  "/front-end-basics/css/": [
    { text: 'CSS', link: encodeURI('/front-end-basics/css/README.md')},
    { text: '第1节 CSS简介', link: encodeURI('/front-end-basics/css/第1节CSS简介.md') },
    { text: '第2节 CSS选择器', link: encodeURI('/front-end-basics/css/第2节CSS选择器.md')},
    { text: '第3节 CSS盒子模型',  collapsible: true, link: encodeURI('/front-end-basics/css/第3节CSS盒子模型.md')},
    { text: '第4节 CSS浮动与清除', link: encodeURI('/front-end-basics/css/第4节CSS浮动与清除.md')},
    { text: '第5节 CSS定位', link: encodeURI('/front-end-basics/css/第5节CSS定位.md')},
    { text: '第6节 CSS背景', link: encodeURI('/front-end-basics/css/第6节CSS背景.md')},
    { text: '第7节 CSS字体和文本', link: encodeURI('/front-end-basics/css/第7节CSS字体和文本.md')},
    { text: '第8节 CSS布局', link: encodeURI('/front-end-basics/css/第8节CSS布局.md')},
    { text: '第9节 水平垂直居中', link: encodeURI('/front-end-basics/css/第9节水平垂直居中.md')},
    { text: '第10节 CSS3', link: encodeURI('/front-end-basics/css/第10节CSS3.md')},
    { text: 'CSS工具', link: encodeURI('/front-end-basics/css/CSS工具.md')}
  ]
});
