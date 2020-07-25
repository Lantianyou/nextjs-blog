export default function SiteBranding() {

  return (
    <div className="site-branding xl:py-20 md:py-16 sm:p-8">
      <style jsx>{`
        .site-branding {
          background: '#1f1f1f';
          color: #ffffff;
          opacity: 1;
          // animation: site-branding 1s linear;
        }
        `}</style>
      <h1 className="font-bold text-5xl" style={{ letterSpacing: '4px' }}>
        兰天游
        </h1>
      <h2 className="text-3xl font-light opacity-75">
        Think differnet
      </h2>
    </div>
  )
}