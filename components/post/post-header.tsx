import PostTitle from './post-title'
import PostDate from './post-date'

export default function PostHeader({ title, cover, date, author, slug }) {
  return (
    <div className='sticky' style={{ top: '0.75em' }}>
      <PostTitle >
        {title}
      </PostTitle>
      <div style={{ color: '#666', fontSize: '0.6875rem' }}>
        <PostDate dateString={date} />
      </div>
    </div>
  )
}