import "../styles/tailwind.css";
import '../styles/global.css'
import { AppProps } from 'next/app'
import { MDXProvider } from '@mdx-js/react'
import CodeBlock from '../components/CodeBlock'

const mdComponents = {
    pre: props => <div {...props} />,
    code: CodeBlock
}

export default function App({ Component, pageProps }: AppProps) {
    return (
        <MDXProvider components={mdComponents}>
            <Component {...pageProps} />
        </MDXProvider>
    )
}
