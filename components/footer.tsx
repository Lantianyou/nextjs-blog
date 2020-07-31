import Link from 'next/link'
import { Twitter, Mail, GitHub, Linkedin } from 'react-feather';
const footerColor = 'rgba(117, 117, 117, 1)'


export default function Footer() {

  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <div className="flex flex-col md:flex-row justify-around items-center max-w-2xl mx-auto">
        {/* 颜色取自medium */}
        <a href="https://github.com/Lantianyou/nextjs-blog" className="py-2" aria-label='源代码'>
          <GitHub size={30} color={footerColor} /></a>
        <a href="https://twitter.com/dtlantianyou" className="py-2" aria-label='twitter'>
          <Twitter size={30} color={footerColor} />
        </a>
        <a href="mailto:dtlantianyou@gmail.com" className='py-2' aria-label='e mail address'>
          <Mail size={30} color={footerColor} />
        </a>
        <a href="https://www.linkedin.com/in/lantianyou">
          <Linkedin color={footerColor} />
        </a>
        <Link href="/about" as='/about'>
          <a aria-label='resume' className="font-bold py-2" style={{ color: 'rgba(117, 117, 117, 1)' }}>About</a>
        </Link>
      </div>
    </footer>
  )
}
