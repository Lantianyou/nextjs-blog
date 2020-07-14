import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
const blogsDirectory = path.join(process.cwd(), 'blogs')


const getBlogs = () => {
    const fileNames = fs.readdirSync(blogsDirectory)
    return fileNames.filter(fileName => fileName.includes('.md'))
}

const getBlogSlug = (fileName) => {
    const fileDir = path.join(blogsDirectory, fileName)
    const markdownWithMetaData = fs.readFileSync(fileDir, 'utf-8').toString()
    const parsedMarkdown = matter(markdownWithMetaData)
    const meta = {
        id: fileName.replace('.md', ''),
        title: parsedMarkdown.data.title,
        date: parsedMarkdown.data.date
    }
    return meta
}

export const getBlogsMetadata = () => {
    const blogs = getBlogs()
    return blogs.map(blog => getBlogSlug(blog))
}