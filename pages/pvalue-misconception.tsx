import { GetStaticProps } from 'next'
import NonMarkDown from 'components/non-markdown'
import Head from 'next/head'
import { getMathPost } from 'lib/getPosts'
import YouTube from 'react-youtube';



export default function Post({ htmlString }) {
  return (
    <>
      <Head>
        {/* <link rel="stylesheet" href="https://latex.now.sh/style.css" /> */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.11.0/dist/katex.min.css" integrity="sha384-BdGj8xC2eZkQaxoQ8nSLefg4AV4/AwB3Fj+8SUSo7pnKP6Eoy18liIKTPn9oBYNG" crossOrigin="anonymous" />
      </Head>
      <NonMarkDown title="lorem" date='2020-07-26' >
        <div>
          <YouTube videoId="2g811Eo7K8U" />
        </div>
        <div dangerouslySetInnerHTML={htmlString}></div>
      </NonMarkDown>
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