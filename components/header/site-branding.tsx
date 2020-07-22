export default function SiteBranding() {

  return (
    <div className="site-branding inline-block p-6">

      <style jsx>{`

          .site-branding {
            background: #1d1d1d;
            color: #ffffff;
            opacity: 1;

            animation: site-branding 1s linear;

          @keyframe site-branding {
            to {
              opacity: 0;
            }
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