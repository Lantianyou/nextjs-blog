import { useState, useRef, useEffect } from 'react'
import SiteBranding from 'components/header/site-branding'
import { useDispatch, connect } from 'react-redux'
import { PASS_COVER } from 'lib/actions'
import SiteNav from 'components/header/site-nav'

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
        <SiteBranding opacity={opacity} />
      </div>
      <SiteNav passCover={passCover} />
    </header>

    <div className="sticky-track" ref={ref}>
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