import { useState, useEffect } from 'react'
import SiteBranding from 'components/header/site-branding'
import SiteNav from 'components/header/site-nav'
import ProgressBar from 'components/header/progress-bar'

function HeaderImage() {

  const [scrollY, setScrollY] = useState(0)
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return window.removeEventListener('scroll', onScroll)
  }, [])

  const onScroll = () => {
    setScrollY(window.scrollY)
    console.log('!!!')
    console.log(window.scrollY)
  }

  // const caculateScrollDistance = () => {
  //   const scrollTop = window.pageYOffset
  //   console.log("caculateScrollDistance -> scrollTop", scrollTop)
  //   const windowHeight = window.innerHeight;
  //   console.log("caculateScrollDistance -> windowHeight", windowHeight)
  //   const docHeight = getDocHeight();
  //   console.log("caculateScrollDistance -> docHeight", docHeight)
  //   const totalDocScrollLength = docHeight - windowHeight
  //   const scrollPosition = Math.floor(scrollTop / totalDocScrollLength)
  //   setScrollPosition(scrollPosition)
  //   setScrollY(scrollTop)
  //   console.log(scrollTop)
  // }

  // Now getting the document’s height is tricky and 
  // the reason behind this is because various browsers have different ways 
  // in which they interpret or calculate the height of a document.
  // const getDocHeight = () => {
  //   return Math.max(
  //     document.body.scrollHeight, document.documentElement.scrollHeight,
  //     document.body.offsetHeight, document.documentElement.offsetHeight,
  //     document.body.clientHeight, document.documentElement.clientHeight
  //   );
  // }



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
    </header>
    <SiteNav />
    <ProgressBar progress={scrollPosition} />
  </>
  )
}


export default HeaderImage