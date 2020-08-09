import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { ArrowUp, ArrowLeft } from "react-feather";

export default function PostFooter({
  slug,
  title,
}: {
  slug: string;
  title: string;
}) {
  return (
    <div className="my-12 flex justify-between">
      <Link href="/" as="/">
        <a>
          <ArrowLeft />
        </a>
      </Link>
      <a
        className="twitter-share-button"
        href={`https://twitter.com/intent/tweet?text=${title} https://lantianyou.xyz/posts/${slug}`}
      >
        分享到twitter
      </a>
      <ScrollLink to="article-top" smooth duration={300}>
        <ArrowUp />
      </ScrollLink>
    </div>
  );
}
