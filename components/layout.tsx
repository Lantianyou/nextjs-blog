import Meta from "./meta"
import Footer from './footer'
import Alert from './alert'
export const siteTitle = '兰天游 最重要的事'

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
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}