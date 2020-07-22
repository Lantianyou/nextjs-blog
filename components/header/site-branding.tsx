export default function SiteBranding({ opacity }) {

    return (
        <div className='site-branding-wrapper relative text-center'>
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
    )

}