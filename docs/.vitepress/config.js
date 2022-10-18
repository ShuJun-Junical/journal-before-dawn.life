import { defineConfig } from 'vitepress'

export default defineConfig({
    lang:'zh-CN',
    title:'曙前杂记',
    description:'黎明之前，至暗之后。',
    outDir:'../dist',
    themeConfig:{
        siteTitle:'曙前杂记',
        footer: {
            message: '本站文章禁止转载',
            copyright: '版权所有 © 2022 纾浚'
        },
        docFooter: {
            prev: '上一篇',
            next: '下一篇'
        }
    }
})
