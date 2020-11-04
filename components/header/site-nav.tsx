import Link from "next/link";
import Toggle from "../Toggle";

export default function SiteNav() {
  return (
    <>
      <div className="mt-10 mb-5 text-2xl md:text-4xl text-center font-bold">
        <Link href="/" as="/">
          <a
            aria-label="首页"
            style={{ color: "black", textDecoration: "none" }}
          >
            兰天游
          </a>
        </Link>
      </div>
      <div className="sticky z-10 max-w-2xl mx-auto mt-5">
        <nav className="flex justify-around tracking-tight md:tracking-tighter leading-tight">
          <Link href="/about" as="about">
            <a>About</a>
          </Link>
          <Link href="/books" as="/books">
            <a>Books I like</a>
          </Link>
          <a href="https://twitter.com/dtlantianyou">Twitter</a>
          <Link href="/contact" as="contact">
            <a>Contact</a>
          </Link>
          <Toggle />
        </nav>
      </div>
      <div className="text-center italic my-6 text-gray-600">
        Think different
      </div>
      <hr />
      <style jsx>{`
        hr {
          display: block;
          height: 1px;
          border: 0;
          border-top: 1px solid #ccc;
          margin: 1em 0;
          padding: 0;
        }
      `}</style>
    </>
  );
}
