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

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatibus eveniet illo doloribus dignissimos optio maxime harum praesentium, odit temporibus, quidem dolorem iusto nihil mollitia quaerat nulla a fuga pariatur.</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatibus eveniet illo doloribus dignissimos optio maxime harum praesentium, odit temporibus, quidem dolorem iusto nihil mollitia quaerat nulla a fuga pariatur.</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatibus eveniet illo doloribus dignissimos optio maxime harum praesentium, odit temporibus, quidem dolorem iusto nihil mollitia quaerat nulla a fuga pariatur.</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatibus eveniet illo doloribus dignissimos optio maxime harum praesentium, odit temporibus, quidem dolorem iusto nihil mollitia quaerat nulla a fuga pariatur.</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatibus eveniet illo doloribus dignissimos optio maxime harum praesentium, odit temporibus, quidem dolorem iusto nihil mollitia quaerat nulla a fuga pariatur.</p>
          {children}
        </PostBody>
      </Container>
    </Layout>
  )
}