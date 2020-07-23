import { GetStaticProps, GetStaticPaths } from 'next'
import Post from 'components/post/post'
import { getPostsSlug, getPostAndMetadata } from 'lib/getPosts'

const Blog = ({ htmlString, data, slug }) => {
  const { author, date, title, cover, excerpt } = data
  return (
    <>
      <Post author={author} title={title} date={date} cover={cover} excerpt={excerpt} slug={slug}>
        <style jsx global>{`
        :target {
          animation: yellowflash-bg 2s;
        }

        @keyframes yellowflash-bg {
          from { background: yellow; }
          to   { background: transparent; }
        }
        `}</style>
        <div dangerouslySetInnerHTML={{ __html: htmlString }} />
      </Post>
    </>
  )
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params
  const postAndMetadata = await getPostAndMetadata(slug)
  return {
    props: { ...postAndMetadata, slug }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getPostsSlug()
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