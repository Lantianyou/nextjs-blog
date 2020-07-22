import { useState, useEffect } from 'react'
import SiteBranding from 'components/header/site-branding'
import SiteNav from 'components/header/site-nav'

function HeaderImage() {

  const [opacity, setOpacity] = useState(1)

  const onScroll = () => {
    const scrollY = window.pageYOffset
    const opacity = 1 - scrollY / 547
    setOpacity(opacity)
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (<>
    <SiteNav />
    <header role='banner' className='w-full h-full'>
      <div className='site-header-image bg-center w-full h-full bg-cover min-h-full' style={{
        backgroundImage: `url(${require('../images/supersonic.jpg')})`,
        padding: '10% 0',
        backgroundPosition: 'fixed',
      }} >
        <SiteBranding opacity={opacity} />
      </div>
    </header>
  </>
  )
}


export default HeaderImage