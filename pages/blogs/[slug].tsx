import { GetStaticProps, GetStaticPaths } from 'next'
import path from "path"
import fs from 'fs'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'
import Post from '../../components/post'

const blogsDirectory = path.join(process.cwd(), 'blogs')

const Blog = ({ htmlString, data }) => {
  const { author, date, title, cover, description } = data
  return (
    <>
      <Post author={author} title={title} date={date} coverImage={cover} description={description}>
        <div dangerouslySetInnerHTML={{ __html: htmlString }} />
      </Post>
    </>)
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
  const fileName = path.join(blogsDirectory, params.slug + '.md')
  const markdownWithMetaData = fs.readFileSync(fileName, 'utf-8').toString()
  const parsedMarkdown = matter(markdownWithMetaData)
  const processedContent = await remark()
    .use(html)
    .process(parsedMarkdown.content)
  const htmlString = processedContent.toString()

  return {
    props: {
      htmlString,
      data: parsedMarkdown.data
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  let mdFiles = fs.readdirSync(blogsDirectory)
  const paths = mdFiles
    .filter(mdFile => mdFile.includes('.md'))
    .map(mdFile => mdFile.replace('.md', ''))
    .map(mdFile => ({
      params: {
        slug: mdFile
      }
    }))

  return { paths, fallback: false }
}

export default Blog