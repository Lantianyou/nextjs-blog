import "styles/tailwind.css";
import 'styles/global.css'
// import 'styles/prism.css'
import { Provider as ReduxProvider } from 'react-redux'
import { GlobalStyles } from 'styles/global'
import DarkThemeProvider from 'components/DarkThemeProvider'
import { AppProps } from 'next/app'
import { MDXProvider } from '@mdx-js/react'
import CodeBlock from 'components/CodeBlock'
import store from 'lib/store'


const mdComponents = {
  pre: props => <div {...props} />,
  code: CodeBlock
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={store}>
      <MDXProvider components={mdComponents}>
        <DarkThemeProvider>
          <GlobalStyles />
          <Component {...pageProps} />
        </DarkThemeProvider>
      </MDXProvider>
    </ReduxProvider>
  )
}
