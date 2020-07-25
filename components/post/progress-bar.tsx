import { useEffect } from 'react'

export default function ProgressBar() {

  const onScroll = () => {
    const progress = window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
    document.body.style.setProperty('--scroll', progress.toString())
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="sticky top-0">
      <style jsx>{`
        .progress {
          width: 0%;
          background-color:  #0070f3;
          animation: progress 1s linear;

          // should be in global :root {}
          /* Pause the animation */
            animation-play-state: paused;
            /* Bind the animation to scroll */
            animation-delay: calc(var(--scroll) * -1s);
            /* These last 2 properites clean up overshoot weirdness */
            animation-iteration-count: 1;
            animation-fill-mode: both;
        }

        @keyframes progress {
          to {
            background-color: #0070f3;
            width: 100%;
          }
        }
      `}</style>

      <div className="w-full h-1 progress"></div>
    </div>
  )
}