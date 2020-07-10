import Head from 'next/head'
import Link from "next/link"
export const siteTitle = '兰天游 Day dreamer'

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="container max-w-xl px-4 mx-auto">
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.now.sh/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <nav className="flex-col items-center">
                <h2 className="mb-8">
                    <Link href="/">
                        <a className="leading-snug my-4 text-xl">Blog</a>
                    </Link>
                </h2>
            </nav>

            <main>{children}</main>
        </div>
    )
}