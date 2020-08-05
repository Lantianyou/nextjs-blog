import Link from "next/link";
import Toggle from "components/Toggle";
import Container from "components/container";

export default function SiteNav() {
  return (
    <Container>
      <div className="sticky z-10 max-w-2xl mx-auto">
        <nav className="flex justify-between text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight">
          <Link href="/" as="/">
            <a className="hover:underline" aria-label="首页">
              Blog
            </a>
          </Link>
          <Toggle />
        </nav>
      </div>
    </Container>
  );
}
