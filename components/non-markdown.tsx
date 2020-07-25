import { useEffect, useState } from 'react'
import ProgressBar from 'components/post/progress-bar'
import Container from 'components/container'
import PostHeader from 'components/post/post-header'
import PostBody from 'components/post/post-body'
import SiteNav from './header/site-nav'

export default function MarkDownContent({ title, date, children }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])



  return (<> loading ? <div>isloading</div>:
    <SiteNav />
    <ProgressBar />
    <Container>
      <PostHeader title={title} date={date} />
      <PostBody>
        {children}
      </PostBody>
    </Container>
  </>)
}