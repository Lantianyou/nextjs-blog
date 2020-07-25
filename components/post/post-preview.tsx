import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Fade } from 'react-reveal'
import PostDate from './post-date';
import CoverImage from './cover-image'

export default function PostPreview({
  title,
  cover,
  date,
  excerpt,
  author,
  isOdd,
  slug
}) {
  const { image, description } = cover

  const [isMobile, setIsMobile] = useState(false)
  const isDesktop = !isMobile

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }, [])


  return (
    <Fade
      left={isOdd && isDesktop}
      right={!isOdd && isDesktop}
      bottom={isMobile}
      duration={1000}
      delay={500}
      distance='30px'
    >
      <div className='flex justify-between items-center lg:py-10'>
        <div className="content">
          <h3 className="text-3xl mb-3 leading-snug">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a aria-label={title}>{title}</a>
            </Link>
          </h3>
          <PostDate dateString={date} />

          <p className="text-lg leading-relaxed mb-4">{excerpt || 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores aliquam dolor magni, dolores atque recusandae molestias animi reiciendis dicta voluptas eius sint, corrupti iste optio repellat omnis sapiente blanditiis nemo?'}</p>
          <p><Link as={`/posts/${slug}`} href="/posts/[slug]">
            <a aria-label={title}>Read more</a>
          </Link></p>
        </div>
        <div className="image pl-2" style={{
          width: '300px',
          minWidth: '300px'
        }}>
          <CoverImage slug={slug} title={title} src={image} description={description} />
        </div>
      </div>
    </Fade>
  )
}