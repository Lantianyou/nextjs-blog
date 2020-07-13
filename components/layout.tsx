import { Provider as ReduxProvider } from 'react-redux'
import Meta from "./meta"
import DarkThemeProvider from './DarkThemeProvider'
import { GlobalStyles } from '../styles/global'
import store from '../lib/store'
import Footer from './footer'
import Alert from './alert'
export const siteTitle = '兰天游 Day dreamer'

export default function Layout({
  preview,
  children,
}: {
  preview: boolean,
  children: React.ReactNode
}) {
  return (
    <ReduxProvider store={store}>
      <DarkThemeProvider>
        <GlobalStyles />
        <Meta />
        <div className="min-h-screen">
          <Alert preview={preview} />
          <main>{children}</main>
        </div>
        <Footer />
      </DarkThemeProvider>
    </ReduxProvider>
  )
}