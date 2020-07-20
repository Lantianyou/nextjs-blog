import Head from 'next/head'
import Link from 'next/link'
import Header from "components/header"
import PostHeader from './post-header'
import PostBody from './post-body'
import Layout from "components/layout"
import Container from 'components/container'
import HeaderImage from 'components/header-image'
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
      {/* <HeaderImage /> */}
      <Container>

        <article className='relative'>
          <Head>
            <title>{title}</title>
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={excerpt} />
            <meta name="twitter:image" content={`https://youngerbobo.com/images/${cover.image}`} />
          </Head>
          <PostHeader title={title} date={date} cover={cover} author={author} slug={slug} />
          <PostBody>
            {children}
          </PostBody>
        </article>
        <div className="my-12">
          <Link href="/" as='/'>
            <a>← Back to home</a>
          </Link>
          <a className="twitter-share-button" href={`https://twitter.com/intent/tweet?text=${title} https://youngerbobo.com/blogs/${slug}`}>
            分享到twitter
          </a>
        </div>
      </Container>
    </Layout >
  )
}