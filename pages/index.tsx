import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import { siteTitle } from "components/meta";
import Container from "components/container";
import PostDate from "components/post/post-date";
import { getPostsMetadata, PostMetadata } from "lib/getPosts";
import useSWR from "swr";
import { useEffect, useState } from "react";

const endPoint = "http://localhost:3000/api/posts";

const fetcher = async (path) => {
  const res = await fetch(path);
  return res.json();
};

const Home: NextPage<{ postsMetadata: PostMetadata[] }> = ({
  postsMetadata,
}) => {
  const [mounted, setMounted] = useState(false);
  const { data, error } = useSWR(mounted ? endPoint : null, fetcher);
  useEffect(() => {
    setMounted(true);
  }, []);
  // if (error) {
  //   return <div>server error</div>;
  // }
  // if (!data) {
  //   return <div>loading</div>;
  // }
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
      <Container>
        <div className="max-w-2xl mx-auto">
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
        </div>
      </Container>
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
