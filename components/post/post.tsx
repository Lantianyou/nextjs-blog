import Head from 'next/head'
import dynamic from 'next/dynamic'
import ContentLoader from "react-content-loader"
import Signature from 'components/signature'

const MarkDownContent = dynamic(import('components/non-markdown'), { loading: () => <ContentLoader /> })

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
    <>
      <Head>
        <title>{title}</title>
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={excerpt} />
        <meta name="twitter:image" content={`https://lantianyou.xyz/images/${cover.image}`} />
      </Head>
      <MarkDownContent title={title} date={date} slug={slug}>
        {children}
        <Signature author={author} />
      </MarkDownContent>
    </>
  )
}