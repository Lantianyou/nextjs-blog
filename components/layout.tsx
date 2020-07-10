import Head from 'next/head'
import Link from 'next/link'

export const siteTitle = 'Next.js Sample Website'

export default function Layout({
    children,
    home
}: {
    children: React.ReactNode
    home?: boolean
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
            <header className="flex-col items-center">
                {home && (
                    <h1 className="mb-8">
                        <Link href="/">
                            <a className="text-6xl font-black text-black no-underline">
                                Blog
                            </a>
                        </Link>
                    </h1>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div className="mt-12">
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
        </div>
    )
}