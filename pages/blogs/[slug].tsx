import { GetStaticProps, GetStaticPaths } from 'next'
import Post from 'components/post/post'
import { getBlogsSlug, getBlogPostAndMetadata } from '../../lib/getBlogs'

const Blog = ({ htmlString, data, slug }) => {
  const { author, date, title, cover, excerpt } = data
  return (
    <>
      <Post author={author} title={title} date={date} cover={cover} excerpt={excerpt} slug={slug}>
        <div dangerouslySetInnerHTML={{ __html: htmlString }} />
      </Post>
    </>)
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params
  const postAndMetadata = await getBlogPostAndMetadata(slug)
  return {
    props: { ...postAndMetadata, slug }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getBlogsSlug()
  const paths = slugs.map(slug => (
    {
      params: {
        slug
      }
    }
  ))
  return { paths, fallback: false }
}

export default Blog