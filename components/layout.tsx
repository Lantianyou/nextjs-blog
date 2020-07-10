import Head from 'next/head'
import Link from "next/link"
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from "../styles/theme"
import { GlobalStyles } from '../styles/global'
import { useState } from 'react'
export const siteTitle = '兰天游 Day dreamer'

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    const [theme, setTheme] = useState('light')
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }
    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles />

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
                <nav className="flex items-center justify-between">
                    <Link href="/">
                        <a className="leading-snug my-4 text-xl mb-8">Blog</a>
                    </Link>
                    <button onClick={toggleTheme}>Toggle theme</button>
                </nav>

                <main>{children}</main>
            </div>
        </ThemeProvider>
    )
}