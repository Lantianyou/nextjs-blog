import SiteBranding from 'components/header/site-branding'

function HeaderImage() {
  return (<>
    <header role='banner' className='bg-cover max-h-full flex justify-center items-center' style={{
      backgroundImage: `url(${require('../images/supersonic.jpg')})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      // parallax effect
      // backgroundAttachment: 'fixed',
    }}>

      <SiteBranding />
    </header>
  </>
  )
}


export default HeaderImage