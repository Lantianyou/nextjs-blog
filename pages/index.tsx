import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import Container from '../components/container'
import Intro from '../components/Intro'
import { getNewPostsId } from '../lib/posts'
import { getBlogsMetadata } from '../lib/getBlogs'
import posts from '../lib/post-title'
import PostDate from '../components/post-date'

export default function Home({ blogMetadata }) {

    return (
        <Layout preview={false}>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <Container>
                <Intro />
                <section className="text-xl leading-normal">
                    {/* <ul className="list-none p-0 m-0">
                        {posts.map(({ id, title, date }) => (
                            <li className="mb-5" key={id}>
                                <Link href="/posts/[id]" as={`/posts/${id}`}>
                                    <a>{title}</a>
                                </Link>
                                <br />
                                {date && <small className="text-gray-500">
                                    <PostDate dateString={date} />
                                </small>}
                            </li>
                        ))}
                    </ul> */}
                    <ul className="list-none p-0 m-0">
                        {blogMetadata.map(({ id, title, date }) => (
                            <li className="mb-5" key={id}>
                                <Link href="/blogs/[id]" as={`/blogs/${id}`}>
                                    <a>{title}</a>
                                </Link>
                                <br />
                                {date && <small className="text-gray-500">
                                    <PostDate dateString={date} />
                                </small>}
                            </li>
                        ))}
                    </ul>
                </section>
            </Container>
        </Layout>
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
