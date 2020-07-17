import Link from 'next/link'
import cn from 'classname'

export default function CoverImage({ title, src, slug }) {
    const type = src.split('.').pop()
    const image = (
        <picture>
            <source srcSet={require(`../public/images/${src}`)} type={`image/${type}`} />
            {/* <source srcSet={require(`../public/images/${src}?webp`)} type='image/webp' /> */}
            <img
                src={require(`../public/images/${src}`)}
                alt={`Cover Image for ${title}`}
                className={cn('shadow-small', {
                    'hover:shadow-medium transition-shadow duration-200': slug,
                })}
            />
        </picture>
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