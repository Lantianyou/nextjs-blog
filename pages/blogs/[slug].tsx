import { GetStaticProps, GetStaticPaths } from 'next'
import Post from '../../components/post'
import { getBlogsSlug, getBlogPostAndMetadata, blogsDirectory } from '../../lib/getBlogs'

const Blog = ({ htmlString, data }) => {
  const { author, date, title, coverImage, description } = data
  return (
    <>
      <Post author={author} title={title} date={date} coverImage={coverImage} description={description}>
        <div dangerouslySetInnerHTML={{ __html: htmlString }} />
      </Post>
    </>)
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postAndMetadata = await getBlogPostAndMetadata(params.slug)
  return {
    props: postAndMetadata
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