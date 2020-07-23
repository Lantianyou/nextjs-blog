import Link from 'next/link'
import CoverImage from './cover-image'
import PostDate from './post-date'

export default function HeroPost({
    title,
    cover,
    date,
    excerpt,
    slug,
}) {
    const { image, description } = cover
    return (
        <section>
            <div className="mb-8 md:mb-16">
                <CoverImage title={title} src={image} description={description} slug={slug} />
            </div>
            <div className="mb-20 md:mb-28">
                <div>
                    <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
                        <Link as={`/posts/${slug}`} href="/posts/[slug]">
                            <a className="hover:underline" aria-label={title}>{title}</a>
                        </Link>
                    </h3>
                    <div className="mb-4 md:mb-0 text-lg">
                        <PostDate dateString={date} />
                    </div>
                </div>
                <div>
                    <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
                </div>
            </div>
        </section>
    )
}
