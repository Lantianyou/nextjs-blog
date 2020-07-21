import cn from 'classnames'
import { useState, useRef, useEffect } from 'react'
import Link from "next/link"
import { useDispatch, connect } from 'react-redux'
import { PASS_COVER } from 'lib/actions'
import Toggle from "./Toggle"

function HeaderImage({ passCover }) {

  const [scrollY, setScrollY] = useState(0)
  const ref = useRef(null)
  const dispatch = useDispatch()

  const onScroll = () => {
    setScrollY(window.scrollY)
    if (ref.current) {
      if (ref.current.getBoundingClientRect().top <= 0) {
        dispatch({ type: PASS_COVER })
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const opacity = Math.max(1 - scrollY / 547, 0)

  return (<>
    <header role='banner' className='relative' >
      <div className='site-header-image bg-center w-full h-full bg-cover min-h-full' style={{
        backgroundImage: `url(${require('../images/supersonic.jpg')})`,
        padding: '10% 0',
        backgroundPosition: 'fixed'
      }} >
        <div className='site-branding-wrapper relative text-center' style={{
        }} >
          <div className="site-branding inline-block p-8" style={{
            background: "#1d1d1d",
            color: '#ffffff',
            opacity: `${opacity}`,
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
    <nav ref={ref} className={cn('mx-auto max-w-2xl my-4 flex justify-between text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight', { fixed: !passCover })}>
      <Link href="/" as='/'>
        <a className="hover:underline" style={{ width: '95%' }}>Blog</a>
      </Link>
      <Toggle />
    </nav>
    <div className="sticky-track">
      <div className="sticky-progress w-full bg-red-300 h-1" style={{ transform: `translate3d(${scrollY / 2000}%, 0px, 0px)` }}></div>
    </div>
  </>
  )
}

const mapStateToProps = (state) => {
  const passCover = state.fixes
  return { passCover }
}

export default connect(mapStateToProps)(HeaderImage)