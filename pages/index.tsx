import { GetStaticProps } from 'next'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Container from '../components/container'
import Intro from '../components/Intro'
import { getBlogsMetadata } from '../lib/getBlogs'
import HeroPost from 'components/post/hero-post'
import MorePosts from 'components/post/more-posts'

export default function Home({ blogMetadata }) {
    const heroPost = blogMetadata[0]
    const morePosts = blogMetadata.slice(1)
    return (
        <Layout preview={false}>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <Container>
                <Intro />
                {heroPost &&
                    <HeroPost
                        title={heroPost.title}
                        cover={heroPost.cover}
                        date={heroPost.date}
                        author={heroPost.author}
                        slug={heroPost.slug}
                        excerpt={heroPost.excerpt}
                    />
                }
                <MorePosts posts={morePosts} />

            </Container>
        </Layout >
    )
}


export const getStaticProps: GetStaticProps = async () => {
    const blogMetadata = getBlogsMetadata()
    return {
        props: {
            blogMetadata
        }
    }
}
