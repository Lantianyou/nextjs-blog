import SiteBranding from 'components/header/site-branding'
import SiteNav from 'components/header/site-nav'

function HeaderImage() {



  return (<>
    <SiteNav />
    <header role='banner' className='bg-cover' style={{
      backgroundImage: `url(${require('../images/supersonic.jpg')})`,
      height: '300px',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundAttachment: 'fixed',
    }}>
      <SiteBranding />
    </header>
  </>
  )
}


export default HeaderImage