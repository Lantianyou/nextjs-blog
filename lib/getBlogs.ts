import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import remark2rehype from 'remark-rehype'
import markdown from 'remark-parse'
import remarkSlug from 'remark-slug'
import toc from 'remark-toc'
import stringify from 'rehype-stringify'
import rehypePrisma from '@mapbox/rehype-prism'


// 对Markdown进行再parse，使得markdown可以带有html元素
// import raw from 'rehype-raw'

export const blogsDirectory = path.join(process.cwd(), 'blogs')

const getBlogMetadata = (slug): BlogMetadata => {
    const fileDir = path.join(blogsDirectory, slug + '.md')
    const markdownWithMetaData = fs.readFileSync(fileDir, 'utf-8').toString()
    const { data } = matter(markdownWithMetaData)

    let meta = {
        slug,
        ...data,
    }

    return meta as BlogMetadata
}

export const getBlogsMetadata = (): BlogMetadata[] => {
    const blogs = getBlogsSlug()
    return blogs.map(blog => getBlogMetadata(blog))
}

export const getBlogsSlug = () => {
    const fileNames = fs.readdirSync(blogsDirectory)
    return fileNames
        .filter(fileName => fileName.includes('.md'))
        .map(fileName => fileName.replace('.md', ''))
}

export const getBlogPostAndMetadata = async (slug) => {
    const fileDir = path.join(blogsDirectory, slug + '.md')
    const markdownWithMetaData = fs.readFileSync(fileDir, 'utf-8').toString()
    const parsedMarkdown = matter(markdownWithMetaData)

    const processedContent = await remark()
        .use(markdown)
        .use(remarkSlug)
        .use(toc, { heading: '目录' })
        .use(remark2rehype, { allowDangerousHtml: true })
        .use(stringify)
        .use(rehypePrisma)
        .process(parsedMarkdown.content)

    const htmlString = processedContent.toString()

    return {
        htmlString,
        data: parsedMarkdown.data
    }
}

interface BlogMetadata {
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