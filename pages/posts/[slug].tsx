import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import cn from "classnames";
import Markdown from "markdown-to-jsx";
import Youtube from "../../components/Youtube";
import { Tweet } from "react-twitter-widgets";
import CodeBlock from "../../components/code-block";
import PostMeta from "../../components/post/post-meta";
import ContentContainer from "../../components/content-container";
import Signature from "../../components/signature";
import styles from "../../public/css/github-markdown.module.css";
import PostHeader from "../../components/post/post-header";
import PostFooter from "../../components/post/post-footer";
import ProgressBar from "../../components/post/progress-bar";
import { getPost, getPostsSlug } from "../../lib/getPosts";

export default function ({ posts }) {
  const { content, data } = posts;
  const { excerpt, cover, title, author, date, slug } = data;
  const useMath = false;

  return (
    <>
      <Head>
        {useMath && (
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/katex@0.11.0/dist/katex.min.css"
            integrity="sha384-BdGj8xC2eZkQaxoQ8nSLefg4AV4/AwB3Fj+8SUSo7pnKP6Eoy18liIKTPn9oBYNG"
            crossOrigin="anonymous"
          />
        )}
      </Head>
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
      <PostMeta excerpt={excerpt} cover={cover} title={title} />
      <ProgressBar />
      <ContentContainer>
        <PostHeader title={title} date={date} />
        <article
          id="article-top"
          className={cn("markdown-body", styles["markdown-body"])}
          style={{ fontSize: "18px" }}
        >
          <Markdown
            options={{
              overrides: {
                Youtube: { component: Youtube },
                Tweet: { component: Tweet },
                code: {
                  component: CodeBlock,
                },
              },
            }}
          >
            {content}
          </Markdown>
          <Signature author={author} />
        </article>
        <PostFooter slug={slug} title={title} />
      </ContentContainer>
    </>
  );
}

type T = {
  slug: string;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as T;
  const { content, data } = await getPost(slug);
  return {
    props: {
      posts: {
        content,
        data,
      },
    },
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
