import { GetStaticProps } from 'next'
import NonMarkDown from 'components/non-markdown'
import Head from 'next/head'
import { getPost } from 'lib/convert'



export default function Post({ content }) {
  return (
    <>
      <Head>
        {/* <link rel="stylesheet" href="https://latex.now.sh/style.css" /> */}
      </Head>
      <NonMarkDown title="lorem" date='2020-07-26' >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste officiis, nemo nesciunt laboriosam sapiente dolorum voluptates at asperiores suscipit soluta modi nisi ipsum corrupti sed illo expedita, ullam deserunt porro!
    </NonMarkDown>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const content = await getPost()

  return {
    props: {
      content
    }
  }
}