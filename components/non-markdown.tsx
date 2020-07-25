import Layout from 'components/layout'
import ProgressBar from 'components/post/progress-bar'
import Container from 'components/container'
import PostHeader from 'components/post/post-header'
import PostBody from 'components/post/post-body'

export default function NonMarkDown({ title, date, children }) {
  return (
    <Layout preview={false}>
      <ProgressBar />
      <Container>
        <PostHeader title={title} date={date} />
        <PostBody>
          {children}
        </PostBody>
      </Container>
    </Layout>
  )
}