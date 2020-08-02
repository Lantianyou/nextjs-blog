import { createContext, useState } from 'react'
import "styles/tailwind.css";
import 'styles/global.css'
import React from 'react'
import { GlobalStyles } from 'styles/global'
import DarkThemeProvider from 'components/DarkThemeProvider'
import { AppProps } from 'next/app'
import { MDXProvider } from '@mdx-js/react'
import CodeBlock from 'components/CodeBlock'


const mdComponents = {
  pre: props => <div {...props} />,
  code: CodeBlock
}

export const ThemeContext = createContext(null)


export default function App({ Component, pageProps }: AppProps) {
  const [darkThemeEnabled, setDarkThemeEnabled] = useState(false)
  const toggleTheme = () => setDarkThemeEnabled(!darkThemeEnabled)
  return (
    <ThemeContext.Provider value={{ darkThemeEnabled, toggleTheme }} >
      <DarkThemeProvider>
        <MDXProvider components={mdComponents}>
          <GlobalStyles />
          <Component {...pageProps} />
        </MDXProvider>
      </DarkThemeProvider>
    </ThemeContext.Provider>
  )
}
