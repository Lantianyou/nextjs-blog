import Head from 'next/head'
import Link from 'next/link'
import Header from "./header"
import PostHeader from './post-header'
import PostBody from './post-body'
import Layout from "./layout"
import Container from './container'
export const siteTitle = '兰天游'

export default function Post({
  children,
  title,
  date,
  coverImage,
  author
}: {
  children: React.ReactNode,
  title: string,
  date: string,
  coverImage: string,
  author: {
    name: string,
    picture: string
  }
}) {
  return (
    <Layout>
      <Container>
        <Header />
        <article>
          <Head>
            <title>{title}</title>
          </Head>
          <PostHeader title={title} date={date} coverImage={coverImage} author={author} />
          <PostBody>
            {children}
          </PostBody>
        </article>

        <div className="my-12">
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      </Container>
    </Layout>
  )
}