import Link from 'next/link'
import cn from 'classname'

export default function CoverImage({ title, src, slug }) {
    const image = (
        <>
            <img className="blur-image" src={require(`../images/${src}`)} />
            <img src={require(`../images/${src}`)}
                alt={`Cover Image for ${title}`}
                className={cn('shadow-small', {
                    'hover:shadow-medium transition-shadow duration-200': slug,
                })} />
        </>
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