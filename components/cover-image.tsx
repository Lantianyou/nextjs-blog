import Link from 'next/link'
import cn from 'classname'

export default function CoverImage({ title, src, slug, description }) {
    if (!src) {
        return <div></div>
    }
    const image = (
        <div>
            <img src={require(`../images/${src}`)}
                alt={`Cover Image for ${title}`}
                className={cn('shadow-small', {
                    'hover:shadow-medium transition-shadow duration-200': slug,
                })} />
            <figcaption>
                <span style={{ fontSize: '0.875rem', margin: '0.125rem 0', color: '#666' }}>{description}</span>
            </figcaption>
        </div>
    )
    return (
        <div className="-mx-5 sm:mx-0">
            {slug ? (
                <Link as={`/blogs/${slug}`} href="/blogs/[slug]">
                    <a aria-label={title}>{image}</a>
                </Link>
            ) : (
                    image
                )}
        </div>
    )
}