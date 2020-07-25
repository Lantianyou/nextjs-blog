import Head from 'next/head'
import Link from 'next/link'
import { Link as ScrollLink } from 'react-scroll'
import PostHeader from './post-header'
import PostBody from './post-body'
import Layout from "components/layout"
import Container from 'components/container'
import ProgressBar from 'components/post/progress-bar'
export const siteTitle = '兰天游'


export default function Post({
  children,
  title,
  date,
  cover,
  excerpt,
  author,
  slug
}: {
  children: React.ReactNode,
  title: string,
  date: string,
  cover: {
    image: string,
    description: string
  },
  excerpt: string,
  author: {
    name: string,
    picture: string
  },
  slug: string
}) {

  return (
    <Layout preview={true}>
      <ProgressBar />
      <Container>
        <article id="article-top">
          <Head>
            <title>{title}</title>
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={excerpt} />
            <meta name="twitter:image" content={`https://lantianyou.xyz/images/${cover.image}`} />
          </Head>
          <PostHeader title={title} date={date} />
          <PostBody>
            {children}
          </PostBody>
        </article>
        <div className="my-12">
          <Link href="/" as='/'>
            <a>← Back to home</a>
          </Link>
          <a className="twitter-share-button" href={`https://twitter.com/intent/tweet?text=${title} https://lantianyou.xyz/posts/${slug}`}>
            分享到twitter
          </a>
          <ScrollLink to='article-top' smooth duration={1000}>
            返回
          </ScrollLink>
        </div>
      </Container>
    </Layout >
  )
}