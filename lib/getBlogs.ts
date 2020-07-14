import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

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
        id: slug,
        title: parsedMarkdown.data.title,
        date: parsedMarkdown.data.date
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

    const processedContent = await remark()
        .use(html)
        .process(parsedMarkdown.content)
    const htmlString = processedContent.toString()

    return {
        htmlString,
        data: parsedMarkdown.data
    }
}
