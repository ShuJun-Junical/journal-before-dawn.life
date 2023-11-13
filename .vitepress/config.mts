import { defineConfig } from 'vitepress';
import fs from 'fs';
import path from 'path';

function getList(name: string) {
  let basePath = path.resolve(__dirname, '../' + name + '/');
  let files = fs.readdirSync(basePath);
  let list: { text: string; link: string }[] = [];
  files.forEach(i => {
    let file = fs.readFileSync(path.join(basePath, i), { encoding: 'utf-8' });
    list.push({
      text: (/^\# (.*)\n/.exec(file) || [, i.slice(0, -3)])[1] as string,
      link: `/${name}/${i.slice(0, -3)}`,
    });
  });
  return list;
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-Hans-CN',
  title: '曙前杂记',
  description: '黎明之前，至暗之后。',
  cleanUrls: true,
  srcExclude: ['**/README.md', '**/TODO.md'],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    i18nRouting: false,
    siteTitle: '曙前杂记',
    outlineTitle: '目录',
    darkModeSwitchLabel: '暗色模式',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    footer: {
      message: '琼ICP备2022001156号-2',
      copyright: '本站文章禁止转载 | 版权所有 © 2023 纾浚',
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    sidebar: [
      {
        text: '前言',
        items: getList('preface'),
      },
      {
        text: '朋友们',
        items: getList('friends'),
      },
    ],
    notFound: {
      title: '这个页面不存在',
      quote: '但是，如果你不改变方向，努力寻找，你最终会到达想去的地方。',
      linkLabel: '回到首页',
      linkText: '返回首页',
    },

    // socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
  },
});
