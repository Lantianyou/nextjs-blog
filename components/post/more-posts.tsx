import PostPreview from './post-preview'

export default function MoreStories({ posts }) {
    return (
        <section>
            <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
                More Stories
            </h2>
            <div className="flex flex-col mb-32">
                {posts.map((post, ind) => (
                    <PostPreview
                        key={post.slug}
                        title={post.title}
                        cover={post.cover}
                        date={post.date}
                        author={post.author}
                        slug={post.slug}
                        excerpt={post.excerpt}
                        isOdd={ind % 2 == 0}
                    />
                ))}
            </div>
        </section>
    )
}