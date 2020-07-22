import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
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

  const [progress, setProgress] = useState(0)

  let totalDocScrollLength;

  const onScroll = () => {
    if (!totalDocScrollLength) {
      totalDocScrollLength = getTotalDocScrollLength()
    }
    const scrollY = window.pageYOffset
    const progress = scrollY / totalDocScrollLength * 100
    setProgress(progress)
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])


  const getTotalDocScrollLength = () => {
    const docHeight = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );
    const winHeight = window.innerHeight
    const totalDocScrollLength = docHeight - winHeight;
    return totalDocScrollLength
  }

  return (
    <Layout preview={true}>
      <ProgressBar progress={progress} />
      <Container>
        <article>
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