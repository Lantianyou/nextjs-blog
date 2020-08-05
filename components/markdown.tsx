import Container from "components/container";
import ProgressBar from "components/post/progress-bar";
import PostHeader from "components/post/post-header";
import PostBody from "components/post/post-body";
import PostFooter from "components/post/post-footer";

export default function MarkDownContent({
  title,
  date,
  children,
  slug,
}: {
  title: string;
  date: string;
  children: React.ReactNode;
  slug: string;
}) {
  return (
    <>
      <ProgressBar />
      <Container>
        <PostHeader title={title} date={date} />
        <PostBody>{children}</PostBody>
        <PostFooter slug={slug} title={title} />
      </Container>
    </>
  );
}
