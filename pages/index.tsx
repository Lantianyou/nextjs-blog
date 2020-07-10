import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getNewPostsId } from '../lib/posts'
import Link from 'next/link'
import PostDate from '../components/PostDate'
import { GetStaticProps } from 'next'

export default function Home({
    newPostsId
}: {
    newPostsId: [string]
}) {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <section className="text-xl leading-normal">
                
                <ul className="list-none p-0 m-0">
                    {newPostsId.map(id => (
                        <li className="mb-5" key={id}>
                            <Link href="/posts/[id]" as={`/posts/${id}`}>
                                {/* <a>{id}</a> */}
                                <a>此刻，创造之时</a>
                            </Link>
                            <br />
                            {/* <small className="text-gray-500">
                                <PostDate dateString={date} />
                            </small> */}
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    // const allPostsData = getSortedPostsData()
    const newPostsId = getNewPostsId()
    return {
        props: {
            newPostsId
        }
    }
}