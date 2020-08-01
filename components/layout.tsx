import Meta from "./meta"
import Footer from './footer'
import Alert from './alert'

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
      <Alert preview={preview} />
      <div className="min-h-screen">
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}