import Meta from "./meta"
import Footer from './footer'
import Alert from './alert'
import SiteNav from 'components/header/site-nav'

export default function Layout({
  preview,
  children,
}: {
  preview: boolean,
  children: React.ReactNode
}) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <SiteNav />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}