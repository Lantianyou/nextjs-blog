import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'

export const siteTitle = '最重要的事 Think different'

Router.events.on('routeChangeStart', () => {
  NProgress.start();
})


Router.events.on('routeChangeComplete', () => {
  NProgress.done();
})

Router.events.on('routeChangeError', () => {
  NProgress.done();
})


export default function Meta() {
  return (
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="description"
        content={siteTitle}
      />
      <meta name="og:title" content={siteTitle} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@dtlantianyou" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="apple-touch-icon" sizes="180x180" href="assets/favicon_io/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="assets/favicon_io/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="assets/favicon_io/favicon-16x16.png" />
      <link rel="manifest" href="assets/favicon_io/site.webmanifest" />
    </Head>
  )
}