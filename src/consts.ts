// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Site title and description
export const SITE_TAB = "风的呼唤与背叛";
export const SITE_TITLE = "风的呼唤与背叛";
export const SITE_DESCRIPTION = "风的呼唤与背叛";
export const DATE_FORMAT = "ddd MMM DD YYYY";

// User profile information
export const USER_NAME = "MareSera";
export const USER_AVATAR = "/profile.webp";

// Server and transition settings
export const SERVER_URL = "https://game.maresera.top";

// Menu items for navigation
export const menuItems = [
  { id: "home", text: "主页", href: "/", svg: "home", target: "_self" }, // Home page
  { id: "about", text: "时间轴", href: "/about", svg: "about", target: "_self" }, // About page
  {
    id: "blog",
    text: "日志",
    href: "/blog",
    svg: "blog",
    target: "_self",
  }, // Blog page with sub-items
  {
    id: "project",
    text: "相关项目",
    href: "/project",
    svg: "project",
    target: "_self",
  }, // Projects page
  {
    id: "friend",
    text: "友情链接",
    href: "/friend",
    svg: "friend",
    target: "_self",
  }, // Friends page
  {
    id: "contact",
    text: "反馈",
    href: "", // Contact email
    
    subItems: [
      {
        id: "tech",
        text: "反馈QQ群",
        href: "https://qm.qq.com/q/MS3U0QBagy",
        svg: "cube",
        target: "_self",
      }, // Technology category
      {
        id: "life",
        text: "反馈邮箱",
        href: "mailto:lyt15624134413@gmail.com",
        svg: "heart",
        target: "_self",
      }, // Life category
    ],
    target: "_blank", // Open in a new tab
    svg: "contact",
  },
];

// Social media and contact icons
export const socialIcons = [
  {
    href: "https://game.maresera.top/404",
    ariaLabel: "Support my work",
    title: "Support my work",
    svg: "support",
  },
  {
    href: "https://game.maresera.top/404",
    ariaLabel: "Github",
    title: "Github",
    svg: "github",
  },
  {
    href: "https://game.maresera.top/404",
    ariaLabel: "BiliBili",
    title: "BiliBili",
    svg: "bilibili",
  },
  {
    href: "/rss.xml",
    ariaLabel: "RSS Feed",
    title: "RSS Feed",
    svg: "rss",
  },
];
