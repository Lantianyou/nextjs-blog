import Link from 'next/link'
import cn from 'classnames'

type Props = {
    title: string,
    src: string,
    slug: string,
    description: string
}

export default function CoverImage({ title, src, slug, description }: Props) {
    if (!src) {
        return <div></div>
    }
    const image = (
        <>
            <img src={require(`../../images/${src}`)}
                alt={`Cover Image for ${title}`}
                className={cn('shadow-small', {
                    'hover:shadow-medium transition-shadow duration-200': slug,
                })} />
            <figcaption>
                <span className='text-sm' style={{ margin: '0.125rem 0', color: '#666' }}>{description}</span>
            </figcaption>
        </>
    )
    return (
        <div className="-mx-5 sm:mx-0">
            {slug ? (
                <Link as={`/posts/${slug}`} href="/posts/[slug]">
                    <a aria-label={title}>{image}</a>
                </Link>
            ) : (
                    image
                )}
        </div>
    )
}