import { useEffect, useState } from 'react'
import ProgressBar from 'components/post/progress-bar'
import Container from 'components/container'
import PostHeader from 'components/post/post-header'
import PostBody from 'components/post/post-body'
import SiteNav from './header/site-nav'
import MyLoader from 'components/content-loader'



export default function MarkDownContent({
  title,
  date,
  children,
  loading
}: {
  title: string,
  date: string,
  children: React.ReactNode,
  loading: boolean
}) {
  const [isLoading, setIsLoading] = useState(loading)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  return <>
    <SiteNav />
    <ProgressBar />
    <Container>
      <PostHeader title={title} date={date} />
      <PostBody>
        {isLoading ? <MyLoader /> : children}
      </PostBody>
    </Container>
  </>
}