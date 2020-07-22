import cn from 'classnames'
import Layout from 'components/layout'
import ProgressBar from 'components/post/progress-bar'
import Container from 'components/container'
import PostHeader from 'components/post/post-header'
import styles from 'components/post/github-markdown.module.css'

export default function NonMarkDown() {
  return (
    <Layout preview={false}>
      <ProgressBar />
      <Container>
        <PostHeader title='非Markdown' date='2020-07-09' />
        <article className={cn('max-w-2xl', 'mx-auto', 'markdown-body', styles['markdown-body'])}>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatibus eveniet illo doloribus dignissimos optio maxime harum praesentium, odit temporibus, quidem dolorem iusto nihil mollitia quaerat nulla a fuga pariatur.</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatibus eveniet illo doloribus dignissimos optio maxime harum praesentium, odit temporibus, quidem dolorem iusto nihil mollitia quaerat nulla a fuga pariatur.</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatibus eveniet illo doloribus dignissimos optio maxime harum praesentium, odit temporibus, quidem dolorem iusto nihil mollitia quaerat nulla a fuga pariatur.</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatibus eveniet illo doloribus dignissimos optio maxime harum praesentium, odit temporibus, quidem dolorem iusto nihil mollitia quaerat nulla a fuga pariatur.</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatibus eveniet illo doloribus dignissimos optio maxime harum praesentium, odit temporibus, quidem dolorem iusto nihil mollitia quaerat nulla a fuga pariatur.</p>
        </article>
      </Container>
    </Layout>
  )
}