import Link from "next/link";
import Toggle from "components/Toggle";
import Container from "components/container";

export default function SiteNav() {
  return (
    <Container>
      <div className="mt-10 mb-5 text-2xl md:text-4xl text-center">
        <span>兰天游</span>
      </div>
      <div className="sticky z-10 max-w-2xl mx-auto mt-5">
        <nav className="flex justify-around text-lg font-bold tracking-tight md:tracking-tighter leading-tight">
          <Link href="/" as="/">
            <a aria-label="首页">Blog</a>
          </Link>
          <Link href="/books" as="/books">
            <a>Books I like</a>
          </Link>
          <Link href="/contact" as="contact">
            <a>Contact</a>
          </Link>
        </nav>
        <Toggle />
      </div>
      <div className="text-center italic">Think different</div>
    </Container>
  );
}
