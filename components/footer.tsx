import Link from 'next/link'
import Container from './container'
import Github from 'components/icons/github'
import Twitter from 'components/icons/twitter'
import Mail from 'components/icons/mail'


export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <Link href="https://github.com/Lantianyou/nextjs-blog">
              <a className="mx-3 font-bold hover:underline">
              <Github size={30} color='rgba(117, 117, 117, 1)'/></a>
            </Link>
            <Link href="https://twitter.com/dtlantianyou">
              {/* 颜色取自medium */}
              <a className="mx-3 font-bold hover:underline"><Twitter size={30} color='rgba(117, 117, 117, 1)'/></a>
            </Link>
            <Link href="/about">
              <a className="mx-3 font-bold hover:underline">About</a>
            </Link>
            
          </div>
        </div>
      </Container>
    </footer>
  )
}
