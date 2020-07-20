import PostDate from './post-date';
import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPreview({
    title,
    cover,
    date,
    excerpt,
    author,
    slug
}) {
    const { image, description } = cover
    return (
        <div>
            <div className="mb-5">
                <CoverImage slug={slug} title={title} src={image} description={description} />
            </div>
            <h3 className="text-3xl mb-3 leading-snug">
                <Link as={`/blogs/${slug}`} href="/blogs/[slug]">
                    <a>{title}</a>
                </Link>
            </h3>
            <div className="text-lg mb-4">
                <PostDate dateString={date} />
            </div>
            <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        </div>
    )
}