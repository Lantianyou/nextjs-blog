import { Author } from "../lib/getPosts";

export default function Signature({ author }: { author: Author }) {
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
