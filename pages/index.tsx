import { GetStaticProps } from 'next'
import Head from 'next/head'
import Layout, { siteTitle } from 'components/layout'
import Container from '../components/container'
import { getBlogsMetadata } from '../lib/getBlogs'
import HeroPost from 'components/post/hero-post'
import MorePosts from 'components/post/more-posts'
import firebase from 'lib/firebase'
import 'firebase/firestore'


export default function Home({ blogMetadata }) {
    const heroPost = blogMetadata[0]
    const morePosts = blogMetadata.slice(1)
    return (
        <Layout preview={false}>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <Container>
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
    const blogMetaData2 = []
    blogMetadata.sort((a, b) => a.date > b.date ? -1 : 1)

    const firestore = firebase.firestore()
    const getPosts = async () => {
        const snapshots = await firestore.collection('posts').get()
        snapshots.docs.map(doc => blogMetaData2.push(doc.data()))
    }
    getPosts()

    console.log(blogMetaData2)

    return {
        props: {
            blogMetadata
        }
    }
}
