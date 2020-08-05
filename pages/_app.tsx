import "public/css/tailwind.css";
import "public/css/global.css";
import DarkThemeProvider from "components/theme/DarkThemeProvider";
import { AppProps } from "next/app";
import { MDXProvider } from "@mdx-js/react";
// import CodeBlock from 'components/CodeBlock'
import Layout from "components/layout";
import SiteNav from "components/header/site-nav";

// const mdComponents = {
//   pre: props => <div {...props} />,
//   code: CodeBlock
// }

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DarkThemeProvider>
      <Layout preview={true}>
        <SiteNav />
        <Component {...pageProps} />
      </Layout>
    </DarkThemeProvider>
  );
}
