import Link from 'next/link'
import CoverImage from './cover-image'
import PostDate from './post-date'

type Props = {
    title: string
    cover: {
        image: string,
        description: string
    }
    date: string
    excerpt: string
    slug: string
}

export default function HeroPost({
    title,
    cover,
    date,
    excerpt,
    slug,
}: Props) {
    const { image, description } = cover
    return (
        <section className='flex flex-col md:flex-row items-center mt-20'>
            <div className="mb-8 md:mb-16">
                <CoverImage
                    title={title}
                    src={image}
                    description={description}
                    slug={slug} />
            </div>
            <div className="mb-20 md:mb-28 ml-10">
                <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
                    <Link as={`/posts/${slug}`} href="/posts/[slug]">
                        <a className="hover:underline" aria-label={title}>{title}</a>
                    </Link>
                </h3>
                <div className="mb-4 md:mb-0 text-lg">
                    <PostDate dateString={date} />
                </div>
                <p className="text-lg leading-relaxed mb-4 hidden md:block">{excerpt}</p>
            </div>
        </section>
    )
}
