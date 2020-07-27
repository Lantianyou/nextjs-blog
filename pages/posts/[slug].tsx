import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import Post from 'components/post/post'
import { getPostsSlug, getPostAndMetadata } from 'lib/getPosts'

const Blog = ({ htmlString, data, slug }) => {
  const { author, date, title, cover, excerpt } = data
  const withMath = slug === 'pvalue-misconception'
  return (
    <>
      {withMath && <Head>
        {/* <link rel="stylesheet" href="https://latex.now.sh/style.css" /> */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.11.0/dist/katex.min.css" integrity="sha384-BdGj8xC2eZkQaxoQ8nSLefg4AV4/AwB3Fj+8SUSo7pnKP6Eoy18liIKTPn9oBYNG" crossOrigin="anonymous" />
      </Head>}
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