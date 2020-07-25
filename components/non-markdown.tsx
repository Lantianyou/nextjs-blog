import ProgressBar from 'components/post/progress-bar'
import Container from 'components/container'
import PostHeader from 'components/post/post-header'
import PostBody from 'components/post/post-body'
import SiteNav from './header/site-nav'

export default function MarkDownContent({ title, date, children }) {
  return (
    <>
      <SiteNav />
      <ProgressBar />
      <Container>
        <PostHeader title={title} date={date} />
        <PostBody>
          {children}
        </PostBody>
      </Container>
    </>
  )
}