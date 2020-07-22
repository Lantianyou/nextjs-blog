import Link from 'next/link'
import Github from 'components/icons/github'
import Twitter from 'components/icons/twitter'
import Mail from 'components/icons/mail'


export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <div className="flex flex-col lg:flex-row justify-around items-center max-w-2xl mx-auto">
        {/* 颜色取自medium */}
        <a href="https://github.com/Lantianyou/nextjs-blog" className="py-2">
          <Github size={30} color='rgba(117, 117, 117, 1)' /></a>
        <a href="https://twitter.com/dtlantianyou" className="py-2">
          <Twitter size={30} color='rgba(117, 117, 117, 1)' />
        </a>
        <a href="mailto:dtlantianyou@gmail.com" className='py-2'>
          <Mail size={30} color='rgba(117, 117, 117, 1)' />
        </a>
        <Link href="/about" as='/about'>
          <a className="font-bold py-2" style={{ color: 'rgba(117, 117, 117, 1)' }}>About</a>
        </Link>
      </div>
    </footer>
  )
}
