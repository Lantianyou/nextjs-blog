import Head from 'next/head'

import PostHeader from './post-header'
import PostBody from './post-body'
import Layout from "components/layout"
import Container from 'components/container'
import ProgressBar from 'components/post/progress-bar'
import PostFooter from 'components/post/post-footer'
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
        <PostFooter slug={slug} title={title} />
      </Container>
    </Layout >
  )
}