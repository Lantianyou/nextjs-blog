import SiteBranding from 'components/header/site-branding'
import SiteNav from 'components/header/site-nav'
import ProgressBar from 'components/header/progress-bar'

function HeaderImage() {

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
    <ProgressBar progress={75} />
  </>
  )
}


export default HeaderImage