import "../styles/tailwind.css";
import '../styles/global.css'
import { AppProps } from 'next/app'
import { MDXProvider } from '@mdx-js/react'

const mdComponents = {
    h1: props => <h1 style={{ color: 'tomato' }} {...props} />
}

export default function App({ Component, pageProps }: AppProps) {
    return (
        <MDXProvider components={mdComponents}>
                <Component {...pageProps} />
        </MDXProvider>
    )
}
