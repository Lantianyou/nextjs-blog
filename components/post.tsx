import Head from 'next/head'
import Link from 'next/link'
import PostDate from "../components/PostDate"
export const siteTitle = 'Next.js Sample Website'

export default function Post({
    children,
    title,
    date
}: {
    children: React.ReactNode,
    title: String,
    date: string
}) {
    return (
        <div className="container max-w-xl px-4 mx-auto">
            <Head>
                <title>{title}</title>
            </Head>
            <article>
                <h1 className="text-3xl leading-tight font-extrabold my-4 tracking-tighter">{title}</h1>
                <div className="text-gray-500">
                    <PostDate dateString={date} />
                </div>
                {children}
            </article>

            <div className="my-12">
                <Link href="/">
                    <a>← Back to home</a>
                </Link>
            </div>
        </div>
    )
}