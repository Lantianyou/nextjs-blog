import Link from "next/link"
import Toggle from "components/Toggle"
import Container from 'components/container'

export default function SiteNav() {
  return (
    <div className='max-w-full sticky z-10' >
      {/* style={{ top: 0, backgroundColor: '#20232a' }} */}
      <Container>
        <nav className='flex justify-between text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight' >
          <Link href="/" as='/'>
            <a className="hover:underline" aria-label="首页">Blog</a>
          </Link>
          <Toggle />
        </nav>
      </Container>
    </div>
  )
}