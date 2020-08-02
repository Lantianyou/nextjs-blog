import { readFileSync, readdirSync } from 'fs'
import { join } from 'path'
import minify from 'rehype-preset-minify'
import matter from 'gray-matter'
import remark from 'remark'
import emogi from 'remark-emoji'
import images from 'remark-images'
import remark2rehype from 'remark-rehype'
import remarkSlug from 'remark-slug'
import math from 'remark-math'
import footnotes from 'remark-footnotes'
import katex from 'rehype-katex'
import stringify from 'rehype-stringify'
import rehypePrisma from '@mapbox/rehype-prism'

// 对Markdown进行再parse，使得markdown可以带有html元素
// import raw from 'rehype-raw'
const drafts = ['get-big-fast.md', 'the-other-side.md', 'a-case-for-china.md', 'test.md', 'think-different.md']
export const postsDir = join(process.cwd(), 'posts')

const getPostMetadata = (slug): PostMetadata => {
    const fileDir = join(postsDir, slug + '.md')
    const markdownWithMetaData = readFileSync(fileDir, 'utf-8').toString()
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
    const fileNames = readdirSync(postsDir)
    return fileNames
        .filter(fileName => fileName.includes('.md') && !drafts.includes(fileName))
        .map(fileName => fileName.replace('.md', ''))
}

export const getPostAndMetadata = async (slug) => {
    const fileDir = join(postsDir, slug + '.md')
    const markdownWithMetaData = readFileSync(fileDir, 'utf-8').toString()
    const parsedMarkdown = matter(markdownWithMetaData)

    const processedContent = await remark()
        .use(math)
        .use(emogi)
        .use(images)
        .use(footnotes)
        .use(remarkSlug)
        .use(remark2rehype, { allowDangerousHtml: true })
        .use(katex)
        .use(rehypePrisma)
        .use(minify)
        .use(stringify)
        .process(parsedMarkdown.content)

    const htmlString = processedContent.toString()

    // appendFileSync(`${postsDir}/${slug}.html`, htmlString)

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