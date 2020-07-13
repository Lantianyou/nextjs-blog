import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import Container from '../components/container'
import Intro from '../components/Intro'
import { getNewPostsId } from '../lib/posts'
import posts from '../lib/post-title'
import PostDate from '../components/post-date'

export default function Home() {
    return (
        <Layout preview={false}>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <Container>
                <Intro />
                <section className="text-xl leading-normal">
                    <ul className="list-none p-0 m-0">
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
                    </ul>
                </section>
            </Container>
        </Layout>
    )
}


// export const getStaticPaths: GetStaticPaths = async () => {
//     const newPostsId = await getNewPostsId()
//     const paths = newPostsId.map(newPostId => ({
//         params: { id: newPostId }
//     }))
//     console.log("getStaticPaths:GetStaticPaths -> paths", paths)
//     return { paths, fallback: false }
// }

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//     // const allPostsData = getSortedPostsData()
//     const newPostsId = getNewPostsId()
//     return {
//         props: {
//             newPostsId
//         }
//     }
// }
