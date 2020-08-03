import { GetStaticProps } from 'next'
import { readFileSync } from 'fs'
import { join } from 'path'
import Post from 'components/post/post'
import { getPostAndMetadata } from 'lib/getPosts'

import { PostMetadata } from 'lib/getPosts'

type Props = {
  data: PostMetadata,
  slug: string,
  htmlString: string
}
const Blog = ({ htmlString, data, slug }: Props) => {
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
        <style jsx>{`
          main {
            margin-right:20%;
          }
        `}

        </style>
        <div dangerouslySetInnerHTML={{ __html: htmlString }} />
      </Post>
    </>
  )
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = 'great-stagnation'
  const fileName = join(process.cwd(), 'posts', `${slug}.html`)
  const htmlString = readFileSync(fileName).toString()
  const postAndMetadata = await getPostAndMetadata(slug)
  return {
    props: { slug, htmlString, data: postAndMetadata.data, }
  }
}

export default Blog