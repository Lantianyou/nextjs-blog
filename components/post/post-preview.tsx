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
        <div className='flex justify-between items-center lg:py-10'>
            <div className="content">
                <h3 className="text-3xl mb-3 leading-snug">
                    <Link as={`/posts/${slug}`} href="/posts/[slug]">
                        <a>{title}</a>
                    </Link>
                </h3>
                <PostDate dateString={date} />

                <p className="text-lg leading-relaxed mb-4">{excerpt || 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores aliquam dolor magni, dolores atque recusandae molestias animi reiciendis dicta voluptas eius sint, corrupti iste optio repellat omnis sapiente blanditiis nemo?'}</p>
                <p><Link as={`/posts/${slug}`} href="/posts/[slug]">
                    <a>Read more</a>
                </Link></p>
            </div>
            <div className="image" style={{
                width: '300px',
                minWidth: '300px'
            }}>
                <CoverImage slug={slug} title={title} src={image} description={description} />
            </div>


        </div>
    )
}