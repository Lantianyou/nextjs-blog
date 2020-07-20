import CoverImage from './cover-image'
import PostTitle from './post-title'
import PostDate from './post-date'

export default function PostHeader({ title, cover, date, author, slug }) {
  const { image, description } = cover
  return (
    <>
      <div className="md:mb-4 -mx-5 sm:mx-0">
        <CoverImage title={title} src={image} slug={slug} description={description} />
      </div>
      <PostTitle>
        {title}
      </PostTitle>
      <div style={{ color: '#666', fontSize: '0.6875rem' }}>
        <PostDate dateString={date} />
      </div>
    </>
  )
}