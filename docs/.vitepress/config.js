import { defineConfig } from 'vitepress'
import fs from 'fs'
import path from 'path'

function getList(name) {
    let basePath = path.resolve(__dirname, '../' + name + '/')
    let files = fs.readdirSync(basePath)
    let list = []
    files.forEach(i => {
        let file = fs.readFileSync(path.join(basePath, i), { encoding: 'utf-8' })
        list.push({
            text: (/^\# (.*)\n/.exec(file) || [, i.slice(0, -3)])[1],
            link: '/' + name + '/' + i.slice(0, -3)
        })
    })
    return list
}

export default defineConfig({
    lang: 'zh-CN',
    title: '曙前杂记',
    description: '黎明之前，至暗之后。',
    outDir: '../dist',
    themeConfig: {
        outlineTitle:'本页目录',
        siteTitle: '曙前杂记',
        footer: {
            message: '琼ICP备2022001156号-2',
            copyright: '本站文章禁止转载 | 版权所有 © 2022 纾浚'
        },
        docFooter: {
            prev: '上一篇',
            next: '下一篇'
        },
        sidebar: [
            {
                text: '前言',
                collapsible: true,
                items: getList('preface')
            }
        ]
    }
})
