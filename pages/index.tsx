import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import PostDate from '../components/PostDate'
import { GetStaticProps } from 'next'

export default function Home({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className="text-xl leading-normal pt-px">
        <h2 className="leading-snug my-4 text-xl">Blog</h2>
        <ul className="list-none p-0 m-0">
          {allPostsData.map(({ id, date, title }) => {
            console.log(id, date, title)
            return (<li className="mb-5" key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className="text-gray-500">
                <PostDate dateString={date} />
              </small>
            </li>
            )
          })}
        </ul>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  console.log("getStaticProps:GetStaticProps -> allPostsData", allPostsData)

  return {
    props: {
      allPostsData
    }
  }
}