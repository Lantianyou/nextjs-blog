import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import remark2rehype from 'remark-rehype'
import markdown from 'remark-parse'
import remarkSlug from 'remark-slug'
import toc from 'remark-toc'
import stringify from 'rehype-stringify'
import highlight from 'rehype-highlight'

// 对Markdown进行再parse，使得markdown可以带有html元素
// import raw from 'rehype-raw'

export const blogsDirectory = path.join(process.cwd(), 'blogs')


export const getBlogsSlug = () => {
    const fileNames = fs.readdirSync(blogsDirectory)
    return fileNames
        .filter(fileName => fileName.includes('.md'))
        .map(fileName => fileName.replace('.md', ''))
}

const getBlogMetadata = (slug) => {
    const fileDir = path.join(blogsDirectory, slug + '.md')
    const markdownWithMetaData = fs.readFileSync(fileDir, 'utf-8').toString()
    const parsedMarkdown = matter(markdownWithMetaData)
    const meta = {
        slug: slug,
        ...parsedMarkdown.data,
    }
    return meta
}

export const getBlogsMetadata = () => {
    const blogs = getBlogsSlug()
    return blogs.map(blog => getBlogMetadata(blog))
}

export const getBlogPostAndMetadata = async (slug) => {
    const fileDir = path.join(blogsDirectory, slug + '.md')
    const markdownWithMetaData = fs.readFileSync(fileDir, 'utf-8').toString()
    const parsedMarkdown = matter(markdownWithMetaData)

    // 显示Markdown需要Markdown parser和HTML stringifier
    // 似乎被卡在CSS上
    const processedContent = await remark()
        .use(markdown)
        .use(remarkSlug)
        .use(toc, { heading: '目录' })
        .use(remark2rehype, { allowDangerousHtml: true })
        .use(stringify)
        .use(highlight)
        .process(parsedMarkdown.content)

    const htmlString = processedContent.toString()

    return {
        htmlString,
        data: parsedMarkdown.data
    }
}
