import SiteBranding from 'components/header/site-branding'
import SiteNav from 'components/header/site-nav'

function HeaderImage() {



  return (<>
    <SiteNav />
    <header role='banner' className='w-full h-full'>
      <div className='site-header-image bg-center w-full h-full bg-cover min-h-full' style={{
        backgroundImage: `url(${require('../images/supersonic.jpg')})`,
        padding: '10% 0',
        backgroundPosition: 'fixed',
      }} >
        <SiteBranding />
      </div>
    </header>
  </>
  )
}


export default HeaderImage