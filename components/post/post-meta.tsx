import Head from "next/head";

export default function ({ title, excerpt, cover }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={excerpt} />
        <meta
          name="twitter:image"
          content={`https://lantianyou.xyz/images/${cover.image}`}
        />
      </Head>
    </>
  );
}
