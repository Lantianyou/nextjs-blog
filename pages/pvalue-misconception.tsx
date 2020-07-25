import { GetStaticProps } from 'next'
import Head from 'next/head'
import MarkDownContent from 'components/non-markdown'
import { getMathPost } from 'lib/getPosts'



export default function Post({ htmlString }) {
  return (
    <>
      <Head>
        {/* <link rel="stylesheet" href="https://latex.now.sh/style.css" /> */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.11.0/dist/katex.min.css" integrity="sha384-BdGj8xC2eZkQaxoQ8nSLefg4AV4/AwB3Fj+8SUSo7pnKP6Eoy18liIKTPn9oBYNG" crossOrigin="anonymous" />
      </Head>
      <MarkDownContent title="lorem" date='2020-07-26' >
        <div dangerouslySetInnerHTML={htmlString}></div>
      </MarkDownContent>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const content = await getMathPost()
  const htmlString = { __html: content }

  return {
    props: {
      htmlString
    }
  }
}