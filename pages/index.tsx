import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import Container from '../components/container'
import Intro from '../components/Intro'
import { getBlogsMetadata } from '../lib/getBlogs'
import PostDate from '../components/post-date'
import HeroPost from '../components/hero-post'

export default function Home({ blogMetadata }) {
    const heroPost = blogMetadata[0]
    console.log(heroPost)
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
                        coverImage={heroPost.coverImage}
                        date={heroPost.date}
                        author={heroPost.author}
                        slug={heroPost.slug}
                        excerpt={heroPost.excerpt}
                    />
                }
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
