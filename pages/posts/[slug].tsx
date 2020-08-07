import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import Head from "next/head";
import cn from "classnames";
// import fetch from "node-fetch";
import Post from "components/post/post";
import styles from "public/css/github-markdown.module.css";
import { getPostsSlug, getPostAndMetadata, PostMetadata } from "lib/getPosts";

const Blog: NextPage<{
  htmlString: string;
  slug: string;
  data: PostMetadata;
}> = ({ htmlString, data, slug }) => {
  const useMath = slug === "pvalue-misconception";

  return (
    <>
      {useMath && (
        <Head>
          {/* <link rel="stylesheet" href="https://latex.now.sh/style.css" /> */}
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/katex@0.11.0/dist/katex.min.css"
            integrity="sha384-BdGj8xC2eZkQaxoQ8nSLefg4AV4/AwB3Fj+8SUSo7pnKP6Eoy18liIKTPn9oBYNG"
            crossOrigin="anonymous"
          />
        </Head>
      )}
      <Post {...data}>
        <style jsx global>{`
          :target {
            animation: yellowflash-bg 2s;
          }

          @keyframes yellowflash-bg {
            from {
              background: yellow;
            }
            to {
              background: transparent;
            }
          }
        `}</style>
        <div
          dangerouslySetInnerHTML={{ __html: htmlString }}
          className={cn("markdown-body", styles["markdown-body"])}
          style={{ fontSize: "18px" }}
        />
      </Post>
    </>
  );
};

type T = {
  slug: string;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as T;
  const postAndMetadata = await getPostAndMetadata(slug);

  return {
    props: { ...postAndMetadata, slug },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getPostsSlug();
  const paths = slugs.map((slug) => ({
    params: {
      slug,
    },
  }));
  return { paths, fallback: false };
};

export default Blog;
