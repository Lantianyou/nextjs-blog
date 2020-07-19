import Link from 'next/link'
import Avatar from 'components/Avatar'
import CoverImage from './cover-image'
import PostDate from './post-date'

export default function HeroPost({
    title,
    cover,
    date,
    excerpt,
    author,
    slug,
}) {
    const { image, description } = cover
    return (
        <section>
            <div className="mb-8 md:mb-16">
                <CoverImage title={title} src={image} description={description} slug={slug} />
            </div>
            <div className="md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 mb-20 md:mb-28">
                <div>
                    <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
                        <Link as={`/blogs/${slug}`} href="/blogs/[slug]">
                            <a className="hover:underline">{title}</a>
                        </Link>
                    </h3>
                    <div className="mb-4 md:mb-0 text-lg">
                        <PostDate dateString={date} />
                    </div>
                </div>
                <div>
                    <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
                    <Avatar name={author.name} picture={author.picture} />
                </div>
            </div>
        </section>
    )
}