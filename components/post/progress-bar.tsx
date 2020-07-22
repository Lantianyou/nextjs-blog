import { useState, useEffect } from 'react'

export default function ProgressBar() {
  const [progress, setProgress] = useState(0)

  let totalDocScrollLength;

  const onScroll = () => {
    if (!totalDocScrollLength) {
      totalDocScrollLength = getTotalDocScrollLength()
    }
    const scrollY = window.pageYOffset
    const progress = scrollY / totalDocScrollLength * 100
    setProgress(progress)
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])


  const getTotalDocScrollLength = () => {
    const docHeight = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );
    const winHeight = window.innerHeight
    const totalDocScrollLength = docHeight - winHeight;
    return totalDocScrollLength
  }
  return (<div className="sticky top-0">
    <div className="w-full bg-red-300 h-1" style={{ transform: `translate3d(${-100 + progress}%,0,0)` }}></div>
  </div>)
}