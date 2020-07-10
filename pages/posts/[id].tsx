import Head from 'next/head'
import { GetStaticProps, GetStaticPaths } from 'next'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date'


export default function Post({
    postData
}: {
    postData: {
        title: string
        date: string
        contentHtml: string
    }
}) {
    return (
        <>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className="text-3xl leading-tight font-extrabold my-4 tracking-tighter">{postData.title}</h1>
                <div className="text-gray-500">
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    console.log("getStaticProps:GetStaticProps -> context", context)
    const postData = await getPostData(context.params.id as string)
    return {
        props: {
            postData
        }
    }
}