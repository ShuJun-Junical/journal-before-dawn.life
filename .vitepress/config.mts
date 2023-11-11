import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '曙前杂记',
  description: '黎明之前，至暗之后。',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outlineTitle: '本页目录',
    // siteTitle: '曙前杂记',
    footer: {
      message: '琼ICP备2022001156号-2',
      copyright: '本站文章禁止转载 | 版权所有 © 2022 纾浚',
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    sidebar: [
      // {
      //   text: '前言',
      //   collapsible: true,
      //   items: getList('preface'),
      // },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
  },
});
