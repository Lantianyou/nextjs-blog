import { useState, useEffect } from 'react'
import Link from "next/link"
import Toggle from "./Toggle"

export default function HeaderImage() {
  const [scrollY, setScrollY] = useState(0)
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (<>
    <header role='banner' className='relative'>
      <div className='site-header-image bg-center w-full h-full bg-cover min-h-full' style={{
        backgroundImage: `url(${require('../images/supersonic.jpg')})`,
        padding: '10% 0',
        bottom: `-${scrollY}px`
      }} >
        <div className='site-branding-wrapper relative text-center' style={{
        }} >
          <div className="site-branding inline-block p-8" style={{
            background: "#1d1d1d",
            color: '#ffffff',
            opacity: `${1 - scrollY / 547}`,
          }}>
            <h1 className="font-bold text-5xl" style={{ letterSpacing: '4px' }}>
              兰天游
            </h1>
            <h2 className="text-3xl font-light opacity-75">
              Think differnet
            </h2>
          </div>
        </div>
      </div>
    </header>
    <nav className='relative mx-auto max-w-screen-xl px-5 flex justify-between text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight' >
      <Link href="/" as='/'>
        <a className="w-1/24 hover:underline">Blog</a>
      </Link>
      <Toggle />
    </nav>
  </>
  )
}