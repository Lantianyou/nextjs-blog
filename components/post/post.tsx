import Head from 'next/head'

import Layout from "components/layout"
import MarkDownContent from 'components/non-markdown'

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
      <Head>
        <title>{title}</title>
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={excerpt} />
        <meta name="twitter:image" content={`https://lantianyou.xyz/images/${cover.image}`} />
      </Head>
      <MarkDownContent title={title} date={date} >
        {children}
      </MarkDownContent>
    </Layout >
  )
}