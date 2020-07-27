import fs from 'fs'
import path from 'path'
// import unified from 'unified'
import matter from 'gray-matter'
import remark from 'remark'
import emogi from 'remark-emoji'
import images from 'remark-images'
import remark2rehype from 'remark-rehype'
import remarkSlug from 'remark-slug'
import toc from 'remark-toc'
import math from 'remark-math'
import katex from 'rehype-katex'
import stringify from 'rehype-stringify'
import rehypePrisma from '@mapbox/rehype-prism'

// 对Markdown进行再parse，使得markdown可以带有html元素
// import raw from 'rehype-raw'

export const postsDir = path.join(process.cwd(), 'posts')

const getPostMetadata = (slug): PostMetadata => {
    const fileDir = path.join(postsDir, slug + '.md')
    const markdownWithMetaData = fs.readFileSync(fileDir, 'utf-8').toString()
    const { data } = matter(markdownWithMetaData)

    let meta = {
        slug,
        ...data,
    }

    return meta as PostMetadata
}

export const getPostsMetadata = (): PostMetadata[] => {
    const posts = getPostsSlug()
    return posts.map(post => getPostMetadata(post))
}

export const getPostsSlug = () => {
    const fileNames = fs.readdirSync(postsDir)
    return fileNames
        .filter(fileName => fileName.includes('.md'))
        .map(fileName => fileName.replace('.md', ''))
}

export const getPostAndMetadata = async (slug) => {
    const fileDir = path.join(postsDir, slug + '.md')
    const markdownWithMetaData = fs.readFileSync(fileDir, 'utf-8').toString()
    const parsedMarkdown = matter(markdownWithMetaData)

    const processedContent = await remark()
        .use(math)
        .use(emogi)
        .use(images)
        .use(toc, { heading: '目录' })
        .use(remarkSlug)
        .use(remark2rehype, { allowDangerousHtml: true })
        .use(katex)
        .use(rehypePrisma)
        .use(stringify)
        .process(parsedMarkdown.content)

    const htmlString = processedContent.toString()

    return {
        htmlString,
        data: parsedMarkdown.data
    }
}

interface PostMetadata {
    slug: string
    title: string
    cover: {
        image: string
        description: string
    }
    date: string
    author: {
        name: string
        picture: string
    }
    excerpt: string
}

// 带有数学公式的Markdown
// export const getMathPost = async (fileName = 'example.md') => {

//     const fileDir = path.join(process.cwd(), 'otherPost', fileName)

//     const processor = await unified()
//         .use(markdown)
//         .use(math)
//         .use(remark2rehype)
//         .use(katex)
//         .use(stringify)
//         .process(fs.readFileSync(fileDir))
//     return processor.toString()
// }