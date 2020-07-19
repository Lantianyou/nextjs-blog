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
  excerpt,
  author,
}: {
  children: React.ReactNode,
  title: string,
  date: string,
  coverImage: string,
  excerpt: string,
  author: {
    name: string,
    picture: string
  }
}) {
  return (
    <Layout preview={true}>
      <Container>
        <Header />
        <article>
          <Head>
            <title>{title}</title>
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={excerpt} />
            <meta name="twitter:image" content={`https://youngerbobo.com/images/${coverImage}`} />
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
          <Link href={`https://twitter.com/intent/tweet?text=${title} https://youngerbobo.com/blogs/time-to-build`}>
            <a className="twitter-share-button">
              分享到twitter</a>
          </Link>
        </div>
      </Container>
    </Layout >
  )
}