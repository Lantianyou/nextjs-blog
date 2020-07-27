import { useEffect, useState } from 'react'
import Container from 'components/container'
import ProgressBar from 'components/post/progress-bar'
import PostHeader from 'components/post/post-header'
import PostBody from 'components/post/post-body'
import PostFooter from 'components/post/post-footer'
import MyLoader from 'components/content-loader'

export default function MarkDownContent({
  title,
  date,
  children,
  loading,
  slug
}: {
  title: string,
  date: string,
  children: React.ReactNode,
  loading: boolean,
  slug: string
}) {
  const [isLoading, setIsLoading] = useState(loading)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <>
      <ProgressBar />
      <Container>
        <PostHeader title={title} date={date} />
        <PostBody>
          {isLoading ? <MyLoader /> : children}
        </PostBody>
        <PostFooter slug={slug} title={title} />
      </Container>
    </>
  )
}