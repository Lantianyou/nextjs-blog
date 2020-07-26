import { GetStaticProps } from 'next'
import Head from 'next/head'
import MarkDownContent from 'components/non-markdown'
import { getMathPost } from 'lib/getPosts'
import * as data from '../../posts.json'

export default function Post({ htmlString }) {
  const { title, date, slug } = data.posts
  return (
    <>
      <Head>
        {/* <link rel="stylesheet" href="https://latex.now.sh/style.css" /> */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.11.0/dist/katex.min.css" integrity="sha384-BdGj8xC2eZkQaxoQ8nSLefg4AV4/AwB3Fj+8SUSo7pnKP6Eoy18liIKTPn9oBYNG" crossOrigin="anonymous" />
      </Head>
      <MarkDownContent title={title} date={date} loading={true} slug={slug}>
        <div dangerouslySetInnerHTML={htmlString}></div>
      </MarkDownContent>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const content = await getMathPost('pvalue.md')
  const htmlString = { __html: content }

  return {
    props: {
      htmlString
    }
  }
}