import { useEffect, useState } from 'react'
import ContentLoader from "react-content-loader"
import Container from 'components/container'
import ProgressBar from 'components/post/progress-bar'
import PostHeader from 'components/post/post-header'
import PostBody from 'components/post/post-body'
import PostFooter from 'components/post/post-footer'
import SiteNav from 'components/header/site-nav'

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
      <SiteNav />
      <ProgressBar />
      <Container>
        <PostHeader title={title} date={date} />
        <PostBody>
          {isLoading ? <ContentLoader /> : children}
        </PostBody>
        <PostFooter slug={slug} title={title} />
      </Container>
    </>
  )
}