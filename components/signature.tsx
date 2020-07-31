export default function ({ author }) {
  return (<div>
    <p>Think different,</p>
    <p>{author.picture} {author.name} <a href="https://twitter.com/dtlantianyou">@dtlantianyou</a></p>
  </div>)
}