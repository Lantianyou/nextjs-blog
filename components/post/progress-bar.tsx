export default function ProgressBar({ progress }) {
  return (<div className="sticky top-0">
    <div className="w-full bg-red-300 h-1" style={{ transform: `translate3d(${-100 + progress}%,0,0)` }}></div>
  </div>)
}