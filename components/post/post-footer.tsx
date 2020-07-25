import Link from 'next/link'
import { Link as ScrollLink } from 'react-scroll'
import Up from 'components/icons/up'
import Back from 'components/icons/back'

export default function PostFooter({ slug, title }) {
  return (
    <div className="my-12 max-w-2xl mx-auto flex justify-between">
      <Link href="/" as='/'>
        <a><Back /></a>
      </Link>
      <a className="twitter-share-button" href={`https://twitter.com/intent/tweet?text=${title} https://lantianyou.xyz/posts/${slug}`}>
        分享到twitter
          </a>
      <ScrollLink to='article-top' smooth duration={1000}>
        <Up />
      </ScrollLink>
    </div>
  )
}