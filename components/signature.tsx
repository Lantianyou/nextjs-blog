import { author } from "lib/getPosts";

export default function ({ author }: { author: author }) {
  return (
    <div>
      <p>Think different,</p>
      <p>
        {author.name}{" "}
        <a href="https://twitter.com/dtlantianyou">@dtlantianyou</a>
      </p>
    </div>
  );
}
