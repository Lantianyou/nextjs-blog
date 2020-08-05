import { useState } from 'react'
import "public/css/tailwind.css";
import 'public/css/global.css'
import DarkThemeProvider from 'components/DarkThemeProvider'
import { AppProps } from 'next/app'
import { MDXProvider } from '@mdx-js/react'
// import CodeBlock from 'components/CodeBlock'
import Layout from 'components/layout'
import SiteNav from 'components/header/site-nav'
import ThemeContext from 'components/theme-context'


// const mdComponents = {
//   pre: props => <div {...props} />,
//   code: CodeBlock
// }

export default function App({ Component, pageProps }: AppProps) {
  const theme = useState(false)
  return (
    <ThemeContext.Provider value={theme} >
      <DarkThemeProvider>
        <Layout preview={true}>
          <SiteNav />
          <Component {...pageProps} />
        </Layout>
      </DarkThemeProvider>
    </ThemeContext.Provider>
  )
}
