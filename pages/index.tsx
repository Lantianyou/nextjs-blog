import { GetStaticProps } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Layout from 'components/layout'
import { siteTitle } from 'components/meta'
import Container from 'components/container'
import SiteNav from 'components/header/site-nav'
import { getPostsMetadata } from 'lib/getPosts'


export default function Home({ postsMetadata }) {
    // const heroPost = postsMetadata[0]
    // const morePosts = postsMetadata.slice(1)
    return (
        <Layout preview={false}>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <SiteNav />
            {/* <HeaderImage /> */}
            <Container>
                <div className="max-w-2xl mx-auto">
                    <ul>
                        {postsMetadata.map(postMetadata => <li>
                            <Link href={`posts/${postMetadata.slug}`}>
                                {postMetadata.title}
                            </Link>
                        </li>)}
                    </ul>
                </div>
            </Container>
        </Layout >
    )
}


export const getStaticProps: GetStaticProps = async () => {
    const postsMetadata = getPostsMetadata()
    postsMetadata.sort((a, b) => a.date > b.date ? -1 : 1)

    return {
        props: {
            postsMetadata
        }
    }
}
