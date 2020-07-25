import PostTitle from './post-title'
import PostDate from './post-date'

export default function PostHeader({ title, date }: { title: string, date: string }) {
  return (
    <div className='mx-auto max-w-2xl my-8' style={{ top: '0.75em' }}>
      <PostTitle >
        {title}
      </PostTitle>
      <div  className='text-center md:text-left'>
        <PostDate dateString={date} />
      </div>
    </div>
  )
}