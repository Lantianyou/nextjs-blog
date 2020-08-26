import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import { siteTitle } from "components/meta";
import ContentContainer from "components/content-container";
import PostDate from "components/post/post-date";
import { getPostsMetadata, PostMetadata } from "lib/getPosts";

const Home: NextPage<{ postsMetadata: PostMetadata[] }> = ({
  postsMetadata,
}) => {
  return (
    <>
      <style jsx>{`
        ul li {
          padding: 10px 15px;
        }
        ul li span {
          color: #5b5b5b;
          display: block;
          font-size: 13px;
        }
        ul li a {
          font-weight: bold;
          color: var(--link-color);
          text-decoration: none;
        }
        @media (any-hover: hover) {
          ul li a:hover {
            background: #eee;
          }
          ul li a:active {
            background: #ccc;
          }
        }
        @media (min-width: 500px) {
          ul {
            padding: 20px 0;
            max-width: 42rem;
            margin: auto;
          }
          ul li {
            padding-left: 0;
          }
          ul li a {
            padding: 10px 15px;
            transition: 150ms background-color ease-in;
          }
          ul li span {
            display: inline-block;
            width: 160px;
            padding-right: 10px;
            text-align: right;
            font-size: inherit;
          }
        }
      `}</style>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <ContentContainer>
        <ul>
          {postsMetadata.map((postMetadata) => (
            <li key={postMetadata.slug}>
              <span>
                <PostDate dateString={postMetadata.date} />
              </span>
              <Link
                href={`posts/${postMetadata.slug}`}
                as={`posts/${postMetadata.slug}`}
              >
                <a>{postMetadata.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </ContentContainer>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const postsMetadata = getPostsMetadata();
  postsMetadata.sort((a, b) => (a.date > b.date ? -1 : 1));

  return {
    props: {
      postsMetadata,
    },
  };
};

export default Home;
