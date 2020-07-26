import { GetStaticProps } from 'next'
import Head from 'next/head'
import Layout, { siteTitle } from 'components/layout'
import Container from '../components/container'
import { getPostsMetadata } from '../lib/getPosts'
import HeroPost from 'components/post/hero-post'
import MorePosts from 'components/post/more-posts'
import HeaderImage from 'components/header-image'
import SiteNav from 'components/header/site-nav'
import * as data from '../posts.json'


export default function Home({ postMetadata }) {
    const heroPost = postMetadata[0]
    const morePosts = postMetadata.slice(1)
    return (
        <Layout preview={false}>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <SiteNav />
            <HeaderImage />
            <Container>
                {heroPost &&
                    <HeroPost
                        title={heroPost.title}
                        cover={heroPost.cover}
                        date={heroPost.date}
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
    const postMetadata = getPostsMetadata()
    postMetadata.sort((a, b) => a.date > b.date ? -1 : 1)
    postMetadata.push(data.posts)

    return {
        props: {
            postMetadata
        }
    }
}
